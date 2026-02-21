// App State
const state = {
    currentView: 'recipes',
    recipes: [],
    pantry: [],
    shopping: [],
    currentRecipe: null,
    editingRecipe: null
};

// Utility Functions
const normalizeText = (text) => {
    return text.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
};

const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Storage Functions
const Storage = {
    save: (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    },
    load: (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
};

// Initialize App
const init = () => {
    // Load data from localStorage
    state.recipes = Storage.load('recipes') || [];
    state.pantry = Storage.load('pantry') || [];
    state.shopping = Storage.load('shopping') || [];

    // Create sample recipe if empty
    if (state.recipes.length === 0) {
        createSampleRecipe();
    }

    // Setup event listeners
    setupEventListeners();

    // Hide loading, show app
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('main-app').style.display = 'flex';
        renderView('recipes');
    }, 500);
};

const createSampleRecipe = () => {
    const sampleRecipe = {
        id: generateId(),
        name: 'Pancakes Clasicos',
        category: 'breakfast',
        preparationTime: 20,
        servings: 4,
        difficulty: 'easy',
        ingredients: [
            { id: generateId(), name: 'Harina', quantity: '2 tazas' },
            { id: generateId(), name: 'Leche', quantity: '1.5 tazas' },
            { id: generateId(), name: 'Huevos', quantity: '2 piezas' },
            { id: generateId(), name: 'Azucar', quantity: '2 cucharadas' }
        ],
        steps: [
            { id: generateId(), description: 'Mezcla la harina, azucar y sal en un bowl grande', image: null },
            { id: generateId(), description: 'En otro bowl, bate los huevos con la leche', image: null },
            { id: generateId(), description: 'Incorpora los ingredientes liquidos a los secos', image: null },
            { id: generateId(), description: 'Cocina en sarten caliente hasta dorar', image: null }
        ],
        image: null,
        dateCreated: new Date().toISOString()
    };
    state.recipes.push(sampleRecipe);
    Storage.save('recipes', state.recipes);
};

// Event Listeners
const setupEventListeners = () => {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            renderView(view);
        });
    });

    // Add button
    document.getElementById('add-btn').addEventListener('click', handleAddButton);

    // Back button
    document.getElementById('back-btn').addEventListener('click', () => {
        if (state.currentRecipe) {
            state.currentRecipe = null;
            renderView(state.currentView);
        }
    });
};

const handleAddButton = () => {
    if (state.currentView === 'recipes') {
        showAddRecipeModal();
    }
};

// View Rendering
const renderView = (viewName) => {
    state.currentView = viewName;
    state.currentRecipe = null;

    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    // Update header
    const titles = {
        recipes: 'Mis Recetas',
        pantry: 'Mi Despensa',
        shopping: 'Lista de Compras'
    };
    document.getElementById('header-title').textContent = titles[viewName];
    document.getElementById('back-btn').style.display = 'none';
    document.getElementById('add-btn').style.display = viewName === 'recipes' ? 'block' : 'none';

    // Render content
    const content = document.getElementById('content');
    switch (viewName) {
        case 'recipes':
            renderRecipesView(content);
            break;
        case 'pantry':
            renderPantryView(content);
            break;
        case 'shopping':
            renderShoppingView(content);
            break;
    }
};

// Recipes View
const renderRecipesView = (container) => {
    const html = `
        <div class="search-bar">
            <input type="text" class="search-input" id="recipe-search" placeholder="Buscar recetas...">
        </div>
        
        <div class="filter-chips">
            <div class="chip active" data-filter="all">Todas</div>
            <div class="chip success" data-filter="canMake">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
                Puedo hacer
            </div>
            <div class="chip warning" data-filter="almost">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                Casi
            </div>
        </div>
        
        <div id="recipes-container" class="recipe-list"></div>
    `;
    container.innerHTML = html;

    // Setup search
    document.getElementById('recipe-search').addEventListener('input', (e) => {
        renderRecipeList(e.target.value);
    });

    // Setup filters
    document.querySelectorAll('.filter-chips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chips .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderRecipeList(document.getElementById('recipe-search').value, chip.dataset.filter);
        });
    });

    renderRecipeList();
};

const renderRecipeList = (searchQuery = '', filter = 'all') => {
    const container = document.getElementById('recipes-container');
    let recipes = [...state.recipes];

    // Apply search
    if (searchQuery) {
        const normalized = normalizeText(searchQuery);
        recipes = recipes.filter(r => 
            normalizeText(r.name).includes(normalized) ||
            r.ingredients.some(i => normalizeText(i.name).includes(normalized))
        );
    }

    // Apply filter
    if (filter === 'canMake') {
        recipes = recipes.filter(r => calculateMatch(r) === 100);
    } else if (filter === 'almost') {
        recipes = recipes.filter(r => {
            const match = calculateMatch(r);
            return match >= 50 && match < 100;
        });
    }

    // Sort by match percentage
    recipes.sort((a, b) => calculateMatch(b) - calculateMatch(a));

    if (recipes.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                <h3>No hay recetas</h3>
                <p>Toca el botón + para agregar</p>
            </div>
        `;
        return;
    }

    container.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');

    // Add click listeners
    container.querySelectorAll('.recipe-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            showRecipeDetail(recipes[index]);
        });
    });
};

const createRecipeCard = (recipe) => {
    const match = calculateMatch(recipe);
    const matchColor = match === 100 ? 'success' : match >= 50 ? 'warning' : 'danger';
    const categoryIcons = {
        breakfast: '☀️',
        lunch: '🍽️',
        dinner: '🌙',
        dessert: '🍰',
        snack: '🍿'
    };

    return `
        <div class="recipe-card" data-id="${recipe.id}">
            ${recipe.image ? 
                `<img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">` :
                `<div class="recipe-icon">${categoryIcons[recipe.category]}</div>`
            }
            <div class="recipe-info">
                <div class="recipe-title">${recipe.name}</div>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.preparationTime} min</span>
                    <span>👥 ${recipe.servings} porciones</span>
                </div>
                <div class="recipe-badges">
                    <span class="badge ${matchColor}">
                        ${match === 100 ? '✓' : ''} ${Math.round(match)}%
                    </span>
                    ${recipe.image || recipe.steps.some(s => s.image) ? 
                        `<span class="badge info">📷 ${countPhotos(recipe)}</span>` : ''
                    }
                </div>
            </div>
        </div>
    `;
};

const calculateMatch = (recipe) => {
    if (!recipe.ingredients.length) return 0;
    const pantryNames = new Set(state.pantry.map(p => normalizeText(p.name)));
    const matched = recipe.ingredients.filter(i => 
        pantryNames.has(normalizeText(i.name))
    ).length;
    return (matched / recipe.ingredients.length) * 100;
};

const countPhotos = (recipe) => {
    let count = recipe.image ? 1 : 0;
    count += recipe.steps.filter(s => s.image).length;
    return count;
};

// Recipe Detail View
const showRecipeDetail = (recipe) => {
    state.currentRecipe = recipe;
    const match = calculateMatch(recipe);
    const missing = getMissingIngredients(recipe);
    
    document.getElementById('header-title').textContent = recipe.name;
    document.getElementById('back-btn').style.display = 'block';
    document.getElementById('add-btn').style.display = 'none';

    const content = document.getElementById('content');
    content.innerHTML = `
        <div style="padding-bottom: 20px;">
            ${recipe.image ? 
                `<img src="${recipe.image}" style="width: 100%; height: 250px; object-fit: cover;">` :
                `<div style="height: 200px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; font-size: 80px;">
                    ${getCategoryIcon(recipe.category)}
                </div>`
            }
            
            <div style="padding: 16px;">
                <div style="display: flex; gap: 12px; margin-bottom: 16px;">
                    <span class="badge info">⏱️ ${recipe.preparationTime} min</span>
                    <span class="badge info">👥 ${recipe.servings} porciones</span>
                    <span class="badge ${getDifficultyColor(recipe.difficulty)}">${getDifficultyText(recipe.difficulty)}</span>
                </div>

                ${match === 100 ? `
                    <div style="background: rgba(52, 199, 89, 0.1); padding: 16px; border-radius: 12px; margin-bottom: 16px;">
                        <div style="color: var(--success-color); font-weight: 600;">
                            ✓ Tienes todos los ingredientes!
                        </div>
                    </div>
                ` : missing.length > 0 ? `
                    <div style="background: rgba(255, 149, 0, 0.1); padding: 16px; border-radius: 12px; margin-bottom: 16px;">
                        <div style="color: var(--warning-color); font-weight: 600; margin-bottom: 12px;">
                            ⚠ Te faltan ${missing.length} ingredientes
                        </div>
                        <button class="btn btn-primary" onclick="addMissingToShopping()">
                            🛒 Agregar faltantes a compras
                        </button>
                    </div>
                ` : ''}

                <h2 style="font-size: 20px; font-weight: 600; margin: 24px 0 12px;">Ingredientes</h2>
                ${recipe.ingredients.map(ing => {
                    const hasIt = state.pantry.some(p => normalizeText(p.name) === normalizeText(ing.name));
                    return `
                        <div style="display: flex; gap: 12px; margin-bottom: 12px; align-items: flex-start;">
                            <div style="color: ${hasIt ? 'var(--success-color)' : 'var(--text-secondary)'}; font-size: 20px;">
                                ${hasIt ? '✓' : '○'}
                            </div>
                            <div style="flex: 1; ${hasIt ? '' : 'opacity: 0.6;'}">
                                <div style="font-weight: 500;">${ing.name}</div>
                                <div style="color: var(--text-secondary); font-size: 14px;">${ing.quantity}</div>
                            </div>
                        </div>
                    `;
                }).join('')}

                <h2 style="font-size: 20px; font-weight: 600; margin: 24px 0 12px;">Preparacion</h2>
                ${recipe.steps.map((step, index) => `
                    <div style="margin-bottom: 20px;">
                        <div style="display: flex; gap: 12px; margin-bottom: 12px;">
                            <div style="width: 28px; height: 28px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; flex-shrink: 0;">
                                ${index + 1}
                            </div>
                            <div style="flex: 1; padding-top: 4px;">${step.description}</div>
                        </div>
                        ${step.image ? `
                            <img src="${step.image}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px;">
                        ` : ''}
                    </div>
                `).join('')}

                <div style="margin-top: 32px; display: flex; gap: 12px;">
                    <button class="btn btn-outline" style="flex: 1;" onclick="editRecipe('${recipe.id}')">
                        ✏️ Editar
                    </button>
                    <button class="btn btn-danger" onclick="deleteRecipe('${recipe.id}')">
                        🗑️ Eliminar
                    </button>
                </div>
            </div>
        </div>
    `;
};

const getMissingIngredients = (recipe) => {
    const pantryNames = new Set(state.pantry.map(p => normalizeText(p.name)));
    return recipe.ingredients.filter(i => !pantryNames.has(normalizeText(i.name)));
};

window.addMissingToShopping = () => {
    const missing = getMissingIngredients(state.currentRecipe);
    missing.forEach(ing => {
        if (!state.shopping.some(s => normalizeText(s.name) === normalizeText(ing.name))) {
            state.shopping.push({
                id: generateId(),
                name: ing.name,
                completed: false,
                dateAdded: new Date().toISOString()
            });
        }
    });
    Storage.save('shopping', state.shopping);
    alert(`✓ Se agregaron ${missing.length} ingredientes a tu lista de compras`);
};

window.editRecipe = (id) => {
    // TODO: Implement edit functionality
    alert('Función de editar próximamente');
};

window.deleteRecipe = (id) => {
    if (confirm('¿Estas seguro? Esta accion no se puede deshacer.')) {
        state.recipes = state.recipes.filter(r => r.id !== id);
        Storage.save('recipes', state.recipes);
        renderView('recipes');
    }
};

const getCategoryIcon = (category) => {
    const icons = {
        breakfast: '☀️',
        lunch: '🍽️',
        dinner: '🌙',
        dessert: '🍰',
        snack: '🍿'
    };
    return icons[category] || '📖';
};

const getDifficultyColor = (difficulty) => {
    return difficulty === 'easy' ? 'success' : difficulty === 'medium' ? 'warning' : 'danger';
};

const getDifficultyText = (difficulty) => {
    return difficulty === 'easy' ? 'Fácil' : difficulty === 'medium' ? 'Media' : 'Difícil';
};

// Pantry View
const renderPantryView = (container) => {
    const html = `
        <div class="input-add-bar">
            <input type="text" id="pantry-input" placeholder="Nuevo ingrediente...">
            <button onclick="addToPantry()">Agregar</button>
        </div>
        <div id="pantry-list" class="list-section"></div>
    `;
    container.innerHTML = html;

    // Enter key to add
    document.getElementById('pantry-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addToPantry();
    });

    renderPantryList();
};

const renderPantryList = () => {
    const container = document.getElementById('pantry-list');
    
    if (state.pantry.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <h3>Despensa vacia</h3>
                <p>Agrega los ingredientes que tienes en casa</p>
            </div>
        `;
        return;
    }

    const sorted = [...state.pantry].sort((a, b) => a.name.localeCompare(b.name));
    
    container.innerHTML = `
        <div class="section-header">Ingredientes disponibles (${state.pantry.length})</div>
        ${sorted.map(item => `
            <div class="list-item">
                <div style="color: var(--success-color); font-size: 20px;">✓</div>
                <div class="list-item-text">
                    <div class="list-item-title">${item.name}</div>
                </div>
                <button onclick="deleteFromPantry('${item.id}')" style="background: none; border: none; color: var(--danger-color); padding: 8px; cursor: pointer;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                </button>
            </div>
        `).join('')}
    `;
};

window.addToPantry = () => {
    const input = document.getElementById('pantry-input');
    const name = input.value.trim();
    
    if (!name) return;
    
    // Check if already exists
    if (state.pantry.some(p => normalizeText(p.name) === normalizeText(name))) {
        alert('Este ingrediente ya está en tu despensa');
        return;
    }
    
    state.pantry.push({
        id: generateId(),
        name: name,
        dateAdded: new Date().toISOString()
    });
    
    Storage.save('pantry', state.pantry);
    input.value = '';
    renderPantryList();
};

window.deleteFromPantry = (id) => {
    state.pantry = state.pantry.filter(p => p.id !== id);
    Storage.save('pantry', state.pantry);
    renderPantryList();
};

// Shopping View
const renderShoppingView = (container) => {
    const html = `
        <div class="input-add-bar">
            <input type="text" id="shopping-input" placeholder="Nuevo producto...">
            <button onclick="addToShopping()">Agregar</button>
        </div>
        <div id="shopping-list" class="list-section"></div>
    `;
    container.innerHTML = html;

    // Enter key to add
    document.getElementById('shopping-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addToShopping();
    });

    renderShoppingList();
};

const renderShoppingList = () => {
    const container = document.getElementById('shopping-list');
    
    if (state.shopping.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <h3>Lista vacia</h3>
                <p>Toca el botón + para agregar productos</p>
            </div>
        `;
        return;
    }

    const pending = state.shopping.filter(s => !s.completed);
    const completed = state.shopping.filter(s => s.completed);

    let html = '';

    if (pending.length > 0) {
        html += `<div class="section-header">Por Comprar</div>`;
        html += pending.map(item => createShoppingItem(item)).join('');
    }

    if (completed.length > 0) {
        html += `
            <div class="section-header" style="display: flex; justify-content: space-between; align-items: center;">
                <span>Completados</span>
                <button onclick="clearCompleted()" style="background: none; border: none; color: var(--primary-color); font-size: 14px; cursor: pointer;">
                    Limpiar
                </button>
            </div>
        `;
        html += completed.map(item => createShoppingItem(item)).join('');
    }

    container.innerHTML = html;
};

const createShoppingItem = (item) => {
    return `
        <div class="list-item" onclick="toggleShopping('${item.id}')">
            <div style="color: ${item.completed ? 'var(--success-color)' : 'var(--text-secondary)'}; font-size: 24px;">
                ${item.completed ? '✓' : '○'}
            </div>
            <div class="list-item-text">
                <div class="list-item-title" style="${item.completed ? 'text-decoration: line-through; opacity: 0.5;' : ''}">
                    ${item.name}
                </div>
            </div>
            <button onclick="event.stopPropagation(); deleteFromShopping('${item.id}')" style="background: none; border: none; color: var(--danger-color); padding: 8px; cursor: pointer;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
            </button>
        </div>
    `;
};

window.addToShopping = () => {
    const input = document.getElementById('shopping-input');
    const name = input.value.trim();
    
    if (!name) return;
    
    // Check if already exists
    if (state.shopping.some(s => normalizeText(s.name) === normalizeText(name))) {
        alert('Este producto ya está en tu lista');
        return;
    }
    
    state.shopping.push({
        id: generateId(),
        name: name,
        completed: false,
        dateAdded: new Date().toISOString()
    });
    
    Storage.save('shopping', state.shopping);
    input.value = '';
    renderShoppingList();
};

window.toggleShopping = (id) => {
    const item = state.shopping.find(s => s.id === id);
    if (item) {
        item.completed = !item.completed;
        Storage.save('shopping', state.shopping);
        renderShoppingList();
    }
};

window.deleteFromShopping = (id) => {
    state.shopping = state.shopping.filter(s => s.id !== id);
    Storage.save('shopping', state.shopping);
    renderShoppingList();
};

window.clearCompleted = () => {
    if (confirm('¿Eliminar todos los items completados?')) {
        state.shopping = state.shopping.filter(s => !s.completed);
        Storage.save('shopping', state.shopping);
        renderShoppingList();
    }
};

// Add Recipe Modal
const showAddRecipeModal = () => {
    alert('Funcionalidad de agregar recetas próximamente.\nPor ahora puedes ver y gestionar las recetas existentes.');
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Register Service Worker for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // Service worker registration failed, app still works
        });
    });
}
