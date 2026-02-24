// Complete ES-CA Bilingual Dictionary
const ingredientPairs = [
    // Básicos y condimentos
    ['harina', 'farina'], ['azucar', 'sucre'], ['azúcar', 'sucre'], ['sal', 'sal'],
    ['aceite', 'oli'], ['agua', 'aigua'], ['mantequilla', 'mantega'], ['manteca', 'mantega'],
    ['pimienta', 'pebre'], ['vinagre', 'vinagre'], ['aceitunas', 'olives'], ['olivas', 'olives'],
    
    // Lácteos y huevos
    ['leche', 'llet'], ['nata', 'nata'], ['crema', 'crema'], ['yogur', 'iogurt'],
    ['queso', 'formatge'], ['huevo', 'ou'], ['huevos', 'ous'], ['clara', 'clara'],
    ['yema', 'rovell'], ['mantequilla', 'mantega'],
    
    // Carnes
    ['pollo', 'pollastre'], ['gallina', 'gallina'], ['pavo', 'gall dindi'], ['pato', 'ànec'],
    ['cerdo', 'porc'], ['ternera', 'vedella'], ['vaca', 'vaca'], ['buey', 'bou'],
    ['cordero', 'xai'], ['cabrito', 'cabrit'], ['conejo', 'conill'], ['liebre', 'llebre'],
    ['jamon', 'pernil'], ['jamón', 'pernil'], ['tocino', 'cansalada'], ['bacon', 'bacon'],
    ['chorizo', 'xoriço'], ['salchicha', 'salsitxa'], ['morcilla', 'botifarra'],
    
    // Pescados y mariscos
    ['pescado', 'peix'], ['salmon', 'salmó'], ['salmón', 'salmó'], ['atun', 'tonyina'],
    ['atún', 'tonyina'], ['merluza', 'lluç'], ['bacalao', 'bacallà'], ['sardina', 'sardina'],
    ['anchoa', 'anxova'], ['boquerón', 'seitó'], ['trucha', 'truita'], ['dorada', 'orada'],
    ['lubina', 'llobarro'], ['rape', 'rap'], ['lenguado', 'llenguado'],
    ['gamba', 'gamba'], ['langostino', 'llagostí'], ['langosta', 'llagosta'],
    ['mejillon', 'musclo'], ['mejillón', 'musclo'], ['almeja', 'cloïssa'], ['ostra', 'ostra'],
    ['calamar', 'calamar'], ['pulpo', 'pop'], ['sepia', 'sípia'], ['marisco', 'marisc'],
    
    // Verduras y hortalizas
    ['tomate', 'tomàquet'], ['tomate', 'tomaquet'], ['cebolla', 'ceba'], ['ajo', 'all'],
    ['patata', 'patata'], ['papa', 'patata'], ['zanahoria', 'pastanaga'], ['puerro', 'porro'],
    ['calabacin', 'carabassó'], ['calabacín', 'carabassó'], ['calabaza', 'carbassa'],
    ['berenjena', 'albergínia'], ['pimiento', 'pebrot'], ['pimentón', 'pebre'],
    ['chile', 'xili'], ['pepino', 'cogombre'], ['lechuga', 'enciam'], ['escarola', 'escarola'],
    ['espinaca', 'espinac'], ['acelga', 'bleda'], ['col', 'col'], ['repollo', 'col'],
    ['coliflor', 'coliflor'], ['brocoli', 'bròquil'], ['brócoli', 'bròquil'],
    ['alcachofa', 'carxofa'], ['esparrago', 'espàrrec'], ['espárrago', 'espàrrec'],
    ['judia', 'mongeta'], ['judía', 'mongeta'], ['guisante', 'pèsol'], ['haba', 'fava'],
    ['garbanzo', 'cigró'], ['lenteja', 'llentia'], ['seta', 'bolet'], ['champiñon', 'xampinyó'],
    ['champiñón', 'xampinyó'], ['trufa', 'tòfona'], ['maiz', 'blat de moro'], ['maíz', 'blat de moro'],
    ['remolacha', 'remolatxa'], ['rabano', 'rave'], ['rábano', 'rave'], ['nabo', 'nap'],
    
    // Frutas
    ['manzana', 'poma'], ['pera', 'pera'], ['platano', 'plàtan'], ['plátano', 'plàtan'],
    ['naranja', 'taronja'], ['mandarina', 'mandarina'], ['limon', 'llimona'], ['limón', 'llimona'],
    ['lima', 'llima'], ['pomelo', 'aranja'], ['uva', 'raïm'], ['cereza', 'cirera'],
    ['fresa', 'maduixa'], ['frambuesa', 'gerd'], ['mora', 'móra'], ['arandano', 'nabiu'],
    ['arándano', 'nabiu'], ['grosella', 'grosella'], ['melocoton', 'préssec'], ['melocotón', 'préssec'],
    ['albaricoque', 'albercoc'], ['ciruela', 'pruna'], ['sandia', 'síndria'], ['sandía', 'síndria'],
    ['melon', 'meló'], ['melón', 'meló'], ['kiwi', 'kiwi'], ['mango', 'mango'],
    ['papaya', 'papaia'], ['piña', 'pinya'], ['coco', 'coco'], ['aguacate', 'alvocat'],
    ['higo', 'figa'], ['datil', 'dàtil'], ['dátil', 'dàtil'], ['pasa', 'pansa'],
    ['ciruela pasa', 'pruna seca'], ['orejón', 'orellana'],
    
    // Cereales y legumbres
    ['arroz', 'arròs'], ['arroz', 'arros'], ['trigo', 'blat'], ['avena', 'civada'],
    ['cebada', 'ordi'], ['centeno', 'sègol'], ['maiz', 'blat de moro'], ['quinoa', 'quinoa'],
    ['lentejas', 'llenties'], ['garbanzos', 'cigrons'], ['judias', 'mongetes'],
    ['alubias', 'mongetes'], ['habas', 'faves'], ['soja', 'soia'],
    
    // Pan y pasta
    ['pan', 'pa'], ['barra', 'barra'], ['panecillo', 'panellet'], ['bollo', 'brioix'],
    ['tostada', 'torrada'], ['pasta', 'pasta'], ['espagueti', 'espagueti'], ['macarron', 'macarró'],
    ['macarrón', 'macarró'], ['fideo', 'fideu'], ['lasaña', 'lasanya'], ['ravioli', 'ravioli'],
    ['ñoqui', 'nyoqui'], ['tallarines', 'tallarins'],
    
    // Frutos secos
    ['nuez', 'nou'], ['almendra', 'ametlla'], ['avellana', 'avellana'], ['pistacho', 'pistatxo'],
    ['castaña', 'castanya'], ['piñon', 'pinyó'], ['piñón', 'pinyó'], ['cacahuete', 'cacauet'],
    ['anacardo', 'anacardo'], ['pacana', 'pacana'],
    
    // Dulces y postres
    ['azucar', 'sucre'], ['azúcar', 'sucre'], ['miel', 'mel'], ['chocolate', 'xocolata'],
    ['cacao', 'cacau'], ['vainilla', 'vainilla'], ['canela', 'canyella'], ['tarta', 'pastís'],
    ['pastel', 'pastís'], ['bizcocho', 'bescuit'], ['galleta', 'galeta'], ['helado', 'gelat'],
    ['flan', 'flam'], ['natilla', 'natilla'], ['crema', 'crema'], ['nata', 'nata'],
    ['mermelada', 'melmelada'], ['confitura', 'confitura'], ['dulce de leche', 'dolç de llet'],
    
    // Bebidas
    ['agua', 'aigua'], ['cafe', 'cafè'], ['café', 'cafè'], ['te', 'te'], ['té', 'te'],
    ['leche', 'llet'], ['zumo', 'suc'], ['jugo', 'suc'], ['refresco', 'refresc'],
    ['cerveza', 'cervesa'], ['vino', 'vi'], ['cava', 'cava'], ['licor', 'licor'],
    ['ron', 'rom'], ['whisky', 'whisky'], ['vodka', 'vodka'], ['ginebra', 'ginebra'],
    
    // Hierbas y especias
    ['oregano', 'orenga'], ['orégano', 'orenga'], ['albahaca', 'alfàbrega'], ['tomillo', 'farigola'],
    ['romero', 'romaní'], ['romero', 'romani'], ['laurel', 'llorer'], ['perejil', 'julivert'],
    ['cilantro', 'coriandre'], ['menta', 'menta'], ['hierbabuena', 'herba-bona'],
    ['eneldo', 'anet'], ['estragon', 'estragó'], ['estragón', 'estragó'], ['comino', 'comí'],
    ['curcuma', 'cúrcuma'], ['cúrcuma', 'cúrcuma'], ['jengibre', 'gingebre'], ['curry', 'curri'],
        add: 'Agregar', edit: 'Editar', delete: 'Eliminar', cancel: 'Cancelar', save: 'Guardar',
        myRecipes: 'Mis Recetas', searchRecipes: 'Buscar recetas...', all: 'Todas',
        canMake: 'Puedo hacer', almost: 'Casi', noRecipes: 'No hay recetas',
        tapToAdd: 'Toca el botón + para agregar', newRecipe: 'Nueva Receta', editRecipe: 'Editar Receta',
        min: 'min', servings: 'porciones', easy: 'Fácil', medium: 'Media', hard: 'Difícil',
        haveAll: 'Tienes todos los ingredientes!', missing: 'Te faltan', ingredients: 'ingredientes',
        addMissing: 'Agregar faltantes a compras', ingredientsTitle: 'Ingredientes',
        preparation: 'Preparación', deleteConfirm: '¿Estás seguro? Esta acción no se puede deshacer.',
        recipeName: 'Nombre de la receta', category: 'Categoría',
        breakfast: 'Desayuno', lunch: 'Comida', dinner: 'Cena', dessert: 'Postre', snack: 'Snack',
        time: 'Tiempo', difficulty: 'Dificultad', photo: 'Foto',
        addPhoto: 'Agregar Foto', changePhoto: 'Cambiar Foto', deletePhoto: 'Eliminar Foto',
        addIngredient: 'Agregar Ingrediente', ingredientName: 'Nombre del ingrediente', quantity: 'Cantidad',
        steps: 'Pasos', addStep: 'Agregar Paso', stepDescription: 'Describe el paso',
        myPantry: 'Mi Despensa', newIngredient: 'Nuevo ingrediente...',
        emptyPantry: 'Despensa vacía', addIngredientsPantry: 'Agrega los ingredientes que tienes en casa',
        available: 'disponibles', shoppingList: 'Lista de Compras', newProduct: 'Nuevo producto...',
        emptyList: 'Lista vacía', toBuy: 'Por Comprar', completed: 'Completados',
        clear: 'Limpiar', clearCompleted: '¿Eliminar todos los items completados?',
        addedToShopping: 'Se agregaron {count} ingredientes a tu lista de compras',
        alreadyExists: 'Ya existe en la lista', fillRequired: 'Por favor completa todos los campos requeridos'
    },
    ca: {
        recipes: 'Receptes', pantry: 'Rebost', shopping: 'Compres',
        add: 'Afegir', edit: 'Editar', delete: 'Eliminar', cancel: 'Cancel·lar', save: 'Desar',
        myRecipes: 'Les meves Receptes', searchRecipes: 'Cercar receptes...', all: 'Totes',
        canMake: 'Puc fer', almost: 'Gairebé', noRecipes: 'No hi ha receptes',
        tapToAdd: 'Toca el botó + per afegir', newRecipe: 'Nova Recepta', editRecipe: 'Editar Recepta',
        min: 'min', servings: 'racions', easy: 'Fàcil', medium: 'Mitjana', hard: 'Difícil',
        haveAll: 'Tens tots els ingredients!', missing: 'Et falten', ingredients: 'ingredients',
        addMissing: 'Afegir que falta a compres', ingredientsTitle: 'Ingredients',
        preparation: 'Preparació', deleteConfirm: 'Estàs segur? Aquesta acció no es pot desfer.',
        recipeName: 'Nom de la recepta', category: 'Categoria',
        breakfast: 'Esmorzar', lunch: 'Dinar', dinner: 'Sopar', dessert: 'Postres', snack: 'Berenar',
        time: 'Temps', difficulty: 'Dificultat', photo: 'Foto',
        addPhoto: 'Afegir Foto', changePhoto: 'Canviar Foto', deletePhoto: 'Eliminar Foto',
        addIngredient: 'Afegir Ingredient', ingredientName: 'Nom de l\'ingredient', quantity: 'Quantitat',
        steps: 'Passos', addStep: 'Afegir Pas', stepDescription: 'Descriu el pas',
        myPantry: 'El meu Rebost', newIngredient: 'Nou ingredient...',
        emptyPantry: 'Rebost buit', addIngredientsPantry: 'Afegeix els ingredients que tens a casa',
        available: 'disponibles', shoppingList: 'Llista de Compres', newProduct: 'Nou producte...',
        emptyList: 'Llista buida', toBuy: 'Per Comprar', completed: 'Completats',
        clear: 'Netejar', clearCompleted: 'Eliminar tots els items completats?',
        addedToShopping: 'S\'han afegit {count} ingredients a la teva llista de compres',
        alreadyExists: 'Ja existeix a la llista', fillRequired: 'Si us plau completa tots els camps requerits'
    }
};

// Bilingual ingredient dictionary - simplified
const bilingualIngredients = {
    'harina': 'farina', 'farina': 'harina',
    'azucar': 'sucre', 'sucre': 'azucar', 'azúcar': 'sucre',
    'leche': 'llet', 'llet': 'leche',
    'huevo': 'ou', 'ou': 'huevo', 'huevos': 'ous', 'ous': 'huevos',
    'aceite': 'oli', 'oli': 'aceite',
    'mantequilla': 'mantega', 'mantega': 'mantequilla',
    'sal': 'sal', 'agua': 'aigua', 'aigua': 'agua',
    'pollo': 'pollastre', 'pollastre': 'pollo',
    'cerdo': 'porc', 'porc': 'cerdo',
    'jamon': 'pernil', 'pernil': 'jamon', 'jamón': 'pernil',
    'tomate': 'tomaquet', 'tomaquet': 'tomate', 'tomàquet': 'tomate',
    'cebolla': 'ceba', 'ceba': 'cebolla',
    'ajo': 'all', 'all': 'ajo',
    'patata': 'patata', 'zanahoria': 'pastanaga', 'pastanaga': 'zanahoria',
    'pimiento': 'pebrot', 'pebrot': 'pimiento',
    'arroz': 'arros', 'arros': 'arroz', 'arròs': 'arroz',
    'pan': 'pa', 'pa': 'pan',
    'queso': 'formatge', 'formatge': 'queso',
    'manzana': 'poma', 'poma': 'manzana',
    'naranja': 'taronja', 'taronja': 'naranja',
    'platano': 'platan', 'platan': 'platano', 'plátano': 'platan', 'plàtan': 'platano',
    'limon': 'llimona', 'llimona': 'limon', 'limón': 'llimona'
};

let currentLang = 'es';

const detectLanguage = () => {
    const saved = localStorage.getItem('appLanguage');
    if (saved) return saved;
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('ca') ? 'ca' : 'es';
};

const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('appLanguage', lang);
    document.documentElement.lang = lang;
};

const t = (key) => {
    return translations[currentLang][key] || translations.es[key] || key;
};

const state = {
    currentView: 'recipes',
    recipes: [],
    pantry: [],
    shopping: [],
    currentRecipe: null,
    editingRecipe: null,
    currentFilter: 'all',
    searchQuery: ''
};

const normalizeText = (text) => {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
};

// Check if ingredients match (with bilingual support)
const ingredientsMatch = (name1, name2) => {
    const norm1 = normalizeText(name1);
    const norm2 = normalizeText(name2);
    
    if (norm1 === norm2) return true;
    
    const equiv1 = bilingualIngredients[norm1];
    if (equiv1 && normalizeText(equiv1) === norm2) return true;
    
    const equiv2 = bilingualIngredients[norm2];
    if (equiv2 && normalizeText(equiv2) === norm1) return true;
    
    return false;
};

const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const Storage = {
    save: (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    },
    load: (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
};

const init = () => {
    setLanguage(detectLanguage());
    
    state.recipes = Storage.load('recipes') || [];
    state.pantry = Storage.load('pantry') || [];
    state.shopping = Storage.load('shopping') || [];

    if (state.recipes.length === 0) {
        createSampleRecipe();
    }

    setupEventListeners();

    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('main-app').style.display = 'flex';
        renderView('recipes');
    }, 500);
};

const createSampleRecipe = () => {
    const sampleRecipe = currentLang === 'ca' ? {
        id: generateId(),
        name: 'Creps Clàssiques',
        category: 'breakfast',
        preparationTime: 20,
        servings: 4,
        difficulty: 'easy',
        ingredients: [
            { id: generateId(), name: 'Farina', quantity: '2 tasses' },
            { id: generateId(), name: 'Llet', quantity: '1.5 tasses' },
            { id: generateId(), name: 'Ous', quantity: '2 unitats' },
            { id: generateId(), name: 'Sucre', quantity: '2 cullerades' }
        ],
        steps: [
            { id: generateId(), description: 'Barreja la farina, sucre i sal en un bol gran', image: null },
            { id: generateId(), description: 'En un altre bol, bateix els ous amb la llet', image: null },
            { id: generateId(), description: 'Incorpora els ingredients líquids als secs', image: null },
            { id: generateId(), description: 'Cuina en una paella calenta fins daurar', image: null }
        ],
        image: null,
        dateCreated: new Date().toISOString()
    } : {
        id: generateId(),
        name: 'Pancakes Clásicos',
        category: 'breakfast',
        preparationTime: 20,
        servings: 4,
        difficulty: 'easy',
        ingredients: [
            { id: generateId(), name: 'Harina', quantity: '2 tazas' },
            { id: generateId(), name: 'Leche', quantity: '1.5 tazas' },
            { id: generateId(), name: 'Huevos', quantity: '2 piezas' },
            { id: generateId(), name: 'Azúcar', quantity: '2 cucharadas' }
        ],
        steps: [
            { id: generateId(), description: 'Mezcla la harina, azúcar y sal en un bowl grande', image: null },
            { id: generateId(), description: 'En otro bowl, bate los huevos con la leche', image: null },
            { id: generateId(), description: 'Incorpora los ingredientes líquidos a los secos', image: null },
            { id: generateId(), description: 'Cocina en sartén caliente hasta dorar', image: null }
        ],
        image: null,
        dateCreated: new Date().toISOString()
    };
    
    state.recipes.push(sampleRecipe);
    Storage.save('recipes', state.recipes);
};

const setupEventListeners = () => {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            renderView(view);
        });
    });

    document.getElementById('add-btn').addEventListener('click', handleAddButton);

    document.getElementById('back-btn').addEventListener('click', () => {
        if (state.editingRecipe !== null) {
            state.editingRecipe = null;
            if (state.currentRecipe) {
                showRecipeDetail(state.currentRecipe);
            } else {
                renderView(state.currentView);
            }
        } else if (state.currentRecipe) {
            state.currentRecipe = null;
            renderView(state.currentView);
        }
    });
};

const handleAddButton = () => {
    if (state.currentView === 'recipes') {
        showAddRecipeForm();
    }
};

const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'ca' : 'es';
    setLanguage(newLang);
    
    if (state.editingRecipe !== null) {
        showAddRecipeForm(state.editingRecipe);
    } else if (state.currentRecipe) {
        showRecipeDetail(state.currentRecipe);
    } else {
        renderView(state.currentView);
    }
};

const renderView = (viewName) => {
    state.currentView = viewName;
    state.currentRecipe = null;
    state.editingRecipe = null;

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    const headerTitle = document.getElementById('header-title');
    const backBtn = document.getElementById('back-btn');
    const addBtn = document.getElementById('add-btn');
    
    headerTitle.innerHTML = `
        <span>${t(viewName === 'recipes' ? 'myRecipes' : viewName === 'pantry' ? 'myPantry' : 'shoppingList')}</span>
        <button onclick="toggleLanguage()" style="background: none; border: none; color: var(--primary-color); font-size: 14px; font-weight: 600; padding: 4px 8px; margin-left: 8px; cursor: pointer; border-radius: 6px; border: 1px solid var(--primary-color);">
            ${currentLang.toUpperCase()}
        </button>
    `;
    
    backBtn.style.display = 'none';
    addBtn.style.display = viewName === 'recipes' ? 'block' : 'none';

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

const renderRecipesView = (container) => {
    const html = `
        <div class="search-bar">
            <input type="text" class="search-input" id="recipe-search" placeholder="${t('searchRecipes')}" value="${state.searchQuery}">
        </div>
        
        <div class="filter-chips">
            <div class="chip ${state.currentFilter === 'all' ? 'active' : ''}" data-filter="all">${t('all')}</div>
            <div class="chip success ${state.currentFilter === 'canMake' ? 'active' : ''}" data-filter="canMake">
                ✓ ${t('canMake')}
            </div>
            <div class="chip warning ${state.currentFilter === 'almost' ? 'active' : ''}" data-filter="almost">
                ⚠ ${t('almost')}
            </div>
        </div>
        
        <div id="recipes-container" class="recipe-list"></div>
    `;
    container.innerHTML = html;

    document.getElementById('recipe-search').addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderRecipeList();
    });

    document.querySelectorAll('.filter-chips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            state.currentFilter = chip.dataset.filter;
            renderRecipesView(container);
        });
    });

    renderRecipeList();
};

const renderRecipeList = () => {
    const container = document.getElementById('recipes-container');
    let recipes = [...state.recipes];

    if (state.searchQuery) {
        const normalized = normalizeText(state.searchQuery);
        recipes = recipes.filter(r => 
            normalizeText(r.name).includes(normalized) ||
            r.ingredients.some(i => normalizeText(i.name).includes(normalized))
        );
    }

    if (state.currentFilter === 'canMake') {
        recipes = recipes.filter(r => calculateMatch(r) === 100);
    } else if (state.currentFilter === 'almost') {
        recipes = recipes.filter(r => {
            const match = calculateMatch(r);
            return match >= 50 && match < 100;
        });
    }

    recipes.sort((a, b) => calculateMatch(b) - calculateMatch(a));

    if (recipes.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                <h3>${t('noRecipes')}</h3>
                <p>${t('tapToAdd')}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');

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
                    <span>⏱️ ${recipe.preparationTime} ${t('min')}</span>
                    <span>👥 ${recipe.servings} ${t('servings')}</span>
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
    
    const matched = recipe.ingredients.filter(recipeIng => 
        state.pantry.some(pantryItem => 
            ingredientsMatch(recipeIng.name, pantryItem.name)
        )
    ).length;
    
    return (matched / recipe.ingredients.length) * 100;
};

const countPhotos = (recipe) => {
    let count = recipe.image ? 1 : 0;
    count += recipe.steps.filter(s => s.image).length;
    return count;
};

const showRecipeDetail = (recipe) => {
    state.currentRecipe = recipe;
    const match = calculateMatch(recipe);
    const missing = getMissingIngredients(recipe);
    
    const headerTitle = document.getElementById('header-title');
    headerTitle.innerHTML = `
        <span>${recipe.name}</span>
        <button onclick="toggleLanguage()" style="background: none; border: none; color: var(--primary-color); font-size: 14px; font-weight: 600; padding: 4px 8px; margin-left: 8px; cursor: pointer; border-radius: 6px; border: 1px solid var(--primary-color);">
            ${currentLang.toUpperCase()}
        </button>
    `;
    
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
                <div style="display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
                    <span class="badge info">⏱️ ${recipe.preparationTime} ${t('min')}</span>
                    <span class="badge info">👥 ${recipe.servings} ${t('servings')}</span>
                    <span class="badge ${getDifficultyColor(recipe.difficulty)}">${t(recipe.difficulty)}</span>
                </div>

                ${match === 100 ? `
                    <div style="background: rgba(52, 199, 89, 0.1); padding: 16px; border-radius: 12px; margin-bottom: 16px;">
                        <div style="color: var(--success-color); font-weight: 600;">
                            ✓ ${t('haveAll')}
                        </div>
                    </div>
                ` : missing.length > 0 ? `
                    <div style="background: rgba(255, 149, 0, 0.1); padding: 16px; border-radius: 12px; margin-bottom: 16px;">
                        <div style="color: var(--warning-color); font-weight: 600; margin-bottom: 12px;">
                            ⚠ ${t('missing')} ${missing.length} ${t('ingredients')}
                        </div>
                        <button class="btn btn-primary" onclick="addMissingToShopping()">
                            🛒 ${t('addMissing')}
                        </button>
                    </div>
                ` : ''}

                <h2 style="font-size: 20px; font-weight: 600; margin: 24px 0 12px;">${t('ingredientsTitle')}</h2>
                ${recipe.ingredients.map(ing => {
                    const hasIt = state.pantry.some(p => ingredientsMatch(p.name, ing.name));
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

                <h2 style="font-size: 20px; font-weight: 600; margin: 24px 0 12px;">${t('preparation')}</h2>
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
                        ✏️ ${t('edit')}
                    </button>
                    <button class="btn btn-danger" onclick="deleteRecipe('${recipe.id}')">
                        🗑️ ${t('delete')}
                    </button>
                </div>
            </div>
        </div>
    `;
};

const getMissingIngredients = (recipe) => {
    return recipe.ingredients.filter(recipeIng => 
        !state.pantry.some(pantryItem => 
            ingredientsMatch(recipeIng.name, pantryItem.name)
        )
    );
};

window.addMissingToShopping = () => {
    const missing = getMissingIngredients(state.currentRecipe);
    missing.forEach(ing => {
        if (!state.shopping.some(s => ingredientsMatch(s.name, ing.name))) {
            state.shopping.push({
                id: generateId(),
                name: ing.name,
                completed: false,
                dateAdded: new Date().toISOString()
            });
        }
    });
    Storage.save('shopping', state.shopping);
    alert(t('addedToShopping').replace('{count}', missing.length));
};

window.editRecipe = (id) => {
    const recipe = state.recipes.find(r => r.id === id);
    if (recipe) {
        showAddRecipeForm(recipe);
    }
};

window.deleteRecipe = (id) => {
    if (confirm(t('deleteConfirm'))) {
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

// Form handling (simplified - continued in next comment due to character limit)
const showAddRecipeForm = (recipeToEdit = null) => {
    state.editingRecipe = recipeToEdit;
    const isEditing = recipeToEdit !== null;
    
    const headerTitle = document.getElementById('header-title');
    headerTitle.innerHTML = `
        <span>${isEditing ? t('editRecipe') : t('newRecipe')}</span>
        <button onclick="toggleLanguage()" style="background: none; border: none; color: var(--primary-color); font-size: 14px; font-weight: 600; padding: 4px 8px; margin-left: 8px; cursor: pointer; border-radius: 6px; border: 1px solid var(--primary-color);">
            ${currentLang.toUpperCase()}
        </button>
    `;
    
    document.getElementById('back-btn').style.display = 'block';
    document.getElementById('add-btn').style.display = 'none';

    const formData = {
        name: recipeToEdit?.name || '',
        category: recipeToEdit?.category || 'lunch',
        preparationTime: recipeToEdit?.preparationTime || 30,
        servings: recipeToEdit?.servings || 4,
        difficulty: recipeToEdit?.difficulty || 'medium',
        ingredients: recipeToEdit?.ingredients || [],
        steps: recipeToEdit?.steps || [],
        image: recipeToEdit?.image || null
    };

    renderRecipeForm(formData, isEditing);
};

const renderRecipeForm = (formData, isEditing) => {
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <div style="padding: 16px; padding-bottom: 100px;">
            <div style="margin-bottom: 24px;">
                <label class="form-label">${t('photo')}</label>
                ${formData.image ? `
                    <img src="${formData.image}" id="recipe-main-image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 12px;">
                ` : `
                    <div id="recipe-main-image" style="width: 100%; height: 200px; background: var(--background); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; color: var(--text-secondary);">
                        📷
                    </div>
                `}
                <div style="display: flex; gap: 8px;">
                    <button class="btn btn-outline" style="flex: 1;" onclick="selectMainPhoto()">
                        📷 ${formData.image ? t('changePhoto') : t('addPhoto')}
                    </button>
                    ${formData.image ? `
                        <button class="btn btn-danger" onclick="removeMainPhoto()">
                            🗑️
                        </button>
                    ` : ''}
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">${t('recipeName')}</label>
                <input type="text" class="form-input" id="recipe-name" value="${formData.name}" placeholder="${t('recipeName')}">
            </div>

            <div class="form-group">
                <label class="form-label">${t('category')}</label>
                <select class="form-input" id="recipe-category">
                    <option value="breakfast" ${formData.category === 'breakfast' ? 'selected' : ''}>${t('breakfast')}</option>
                    <option value="lunch" ${formData.category === 'lunch' ? 'selected' : ''}>${t('lunch')}</option>
                    <option value="dinner" ${formData.category === 'dinner' ? 'selected' : ''}>${t('dinner')}</option>
                    <option value="dessert" ${formData.category === 'dessert' ? 'selected' : ''}>${t('dessert')}</option>
                    <option value="snack" ${formData.category === 'snack' ? 'selected' : ''}>${t('snack')}</option>
                </select>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div class="form-group">
                    <label class="form-label">${t('time')} (${t('min')})</label>
                    <input type="number" class="form-input" id="recipe-time" value="${formData.preparationTime}" min="5" max="300">
                </div>
                <div class="form-group">
                    <label class="form-label">${t('servings')}</label>
                    <input type="number" class="form-input" id="recipe-servings" value="${formData.servings}" min="1" max="20">
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">${t('difficulty')}</label>
                <div style="display: flex; gap: 8px;">
                    <button class="btn ${formData.difficulty === 'easy' ? 'btn-success' : 'btn-outline'}" style="flex: 1;" onclick="setDifficulty('easy')">
                        ${t('easy')}
                    </button>
                    <button class="btn ${formData.difficulty === 'medium' ? 'btn-primary' : 'btn-outline'}" style="flex: 1;" onclick="setDifficulty('medium')">
                        ${t('medium')}
                    </button>
                    <button class="btn ${formData.difficulty === 'hard' ? 'btn-danger' : 'btn-outline'}" style="flex: 1;" onclick="setDifficulty('hard')">
                        ${t('hard')}
                    </button>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">${t('ingredientsTitle')}</label>
                <div id="ingredients-list" style="margin-bottom: 12px;">
                    ${formData.ingredients.map((ing, index) => `
                        <div class="list-item" style="margin-bottom: 8px;">
                            <div class="list-item-text">
                                <div class="list-item-title">${ing.name}</div>
                                <div class="list-item-subtitle">${ing.quantity}</div>
                            </div>
                            <button onclick="removeIngredient(${index})" style="background: none; border: none; color: var(--danger-color); padding: 8px;">
                                🗑️
                            </button>
                        </div>
                    `).join('')}
                </div>
                <input type="text" class="form-input" id="ingredient-name" placeholder="${t('ingredientName')}" style="margin-bottom: 8px;">
                <input type="text" class="form-input" id="ingredient-quantity" placeholder="${t('quantity')}" style="margin-bottom: 8px;">
                <button class="btn btn-outline" style="width: 100%;" onclick="addIngredientToForm()">
                    ➕ ${t('addIngredient')}
                </button>
            </div>

            <div class="form-group">
                <label class="form-label">${t('steps')}</label>
                <div id="steps-list" style="margin-bottom: 12px;">
                    ${formData.steps.map((step, index) => `
                        <div class="list-item" style="margin-bottom: 12px; flex-direction: column; align-items: stretch;">
                            <div style="display: flex; gap: 12px; margin-bottom: 8px;">
                                <div style="width: 28px; height: 28px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; flex-shrink: 0;">
                                    ${index + 1}
                                </div>
                                <div style="flex: 1;">${step.description}</div>
                                <button onclick="removeStep(${index})" style="background: none; border: none; color: var(--danger-color); padding: 8px;">
                                    🗑️
                                </button>
                            </div>
                            ${step.image ? `
                                <img src="${step.image}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;">
                            ` : ''}
                            <button class="btn btn-outline" style="font-size: 14px;" onclick="selectStepPhoto(${index})">
                                📷 ${step.image ? t('changePhoto') : t('addPhoto')}
                            </button>
                        </div>
                    `).join('')}
                </div>
                <textarea class="form-input" id="step-description" placeholder="${t('stepDescription')}" rows="3" style="margin-bottom: 8px;"></textarea>
                <button class="btn btn-outline" style="width: 100%;" onclick="addStepToForm()">
                    ➕ ${t('addStep')}
                </button>
            </div>

            <div style="position: fixed; bottom: calc(var(--nav-height) + 16px); left: 16px; right: 16px; z-index: 50;">
                <button class="btn btn-primary" style="width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" onclick="saveRecipeForm()">
                    💾 ${t('save')}
                </button>
            </div>
        </div>

        <input type="file" id="photo-input" accept="image/*" capture="environment" style="display: none;">
    `;

    document.getElementById('photo-input').addEventListener('change', handlePhotoSelect);
};

let currentFormData = null;
let currentPhotoTarget = null;

const updateFormData = () => {
    if (!currentFormData) {
        currentFormData = state.editingRecipe ? {...state.editingRecipe} : {
            name: '',
            category: 'lunch',
            preparationTime: 30,
            servings: 4,
            difficulty: 'medium',
            ingredients: [],
            steps: [],
            image: null
        };
    }
    
    currentFormData.name = document.getElementById('recipe-name')?.value || currentFormData.name;
    currentFormData.category = document.getElementById('recipe-category')?.value || currentFormData.category;
    currentFormData.preparationTime = parseInt(document.getElementById('recipe-time')?.value) || currentFormData.preparationTime;
    currentFormData.servings = parseInt(document.getElementById('recipe-servings')?.value) || currentFormData.servings;
    
    return currentFormData;
};

window.setDifficulty = (difficulty) => {
    const formData = updateFormData();
    formData.difficulty = difficulty;
    currentFormData = formData;
    renderRecipeForm(formData, state.editingRecipe !== null);
};

window.addIngredientToForm = () => {
    const name = document.getElementById('ingredient-name').value.trim();
    const quantity = document.getElementById('ingredient-quantity').value.trim();
    
    if (!name || !quantity) {
        alert(t('fillRequired'));
        return;
    }
    
    const formData = updateFormData();
    formData.ingredients.push({
        id: generateId(),
        name: name,
        quantity: quantity
    });
    
    currentFormData = formData;
    renderRecipeForm(formData, state.editingRecipe !== null);
};

window.removeIngredient = (index) => {
    const formData = updateFormData();
    formData.ingredients.splice(index, 1);
    currentFormData = formData;
    renderRecipeForm(formData, state.editingRecipe !== null);
};

window.addStepToForm = () => {
    const description = document.getElementById('step-description').value.trim();
    
    if (!description) {
        alert(t('fillRequired'));
        return;
    }
    
    const formData = updateFormData();
    formData.steps.push({
        id: generateId(),
        description: description,
        image: null
    });
    
    currentFormData = formData;
    renderRecipeForm(formData, state.editingRecipe !== null);
};

window.removeStep = (index) => {
    const formData = updateFormData();
    formData.steps.splice(index, 1);
    currentFormData = formData;
    renderRecipeForm(formData, state.editingRecipe !== null);
};

window.selectMainPhoto = () => {
    currentPhotoTarget = 'main';
    document.getElementById('photo-input').click();
};

window.removeMainPhoto = () => {
    const formData = updateFormData();
    formData.image = null;
    currentFormData = formData;
    renderRecipeForm(formData, state.editingRecipe !== null);
};

window.selectStepPhoto = (index) => {
    currentPhotoTarget = `step-${index}`;
    document.getElementById('photo-input').click();
};

const handlePhotoSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const formData = updateFormData();
        
        if (currentPhotoTarget === 'main') {
            formData.image = e.target.result;
        } else if (currentPhotoTarget?.startsWith('step-')) {
            const index = parseInt(currentPhotoTarget.split('-')[1]);
            if (formData.steps[index]) {
                formData.steps[index].image = e.target.result;
            }
        }
        
        currentFormData = formData;
        renderRecipeForm(formData, state.editingRecipe !== null);
    };
    reader.readAsDataURL(file);
    
    event.target.value = '';
};

window.saveRecipeForm = () => {
    const formData = updateFormData();
    
    if (!formData.name.trim()) {
        alert(t('fillRequired'));
        return;
    }
    
    if (formData.ingredients.length === 0) {
        alert(t('fillRequired'));
        return;
    }
    
    if (formData.steps.length === 0) {
        alert(t('fillRequired'));
        return;
    }
    
    if (state.editingRecipe) {
        const index = state.recipes.findIndex(r => r.id === state.editingRecipe.id);
        if (index !== -1) {
            state.recipes[index] = {
                ...formData,
                id: state.editingRecipe.id,
                dateCreated: state.editingRecipe.dateCreated
            };
        }
    } else {
        state.recipes.push({
            ...formData,
            id: generateId(),
            dateCreated: new Date().toISOString()
        });
    }
    
    Storage.save('recipes', state.recipes);
    
    currentFormData = null;
    currentPhotoTarget = null;
    state.editingRecipe = null;
    
    renderView('recipes');
};

const renderPantryView = (container) => {
    const html = `
        <div class="input-add-bar">
            <input type="text" id="pantry-input" placeholder="${t('newIngredient')}">
            <button onclick="addToPantry()">${t('add')}</button>
        </div>
        <div id="pantry-list" class="list-section"></div>
    `;
    container.innerHTML = html;

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
                <h3>${t('emptyPantry')}</h3>
                <p>${t('addIngredientsPantry')}</p>
            </div>
        `;
        return;
    }

    const sorted = [...state.pantry].sort((a, b) => a.name.localeCompare(b.name));
    
    container.innerHTML = `
        <div class="section-header">${state.pantry.length} ${t('available')}</div>
        ${sorted.map(item => `
            <div class="list-item">
                <div style="color: var(--success-color); font-size: 20px;">✓</div>
                <div class="list-item-text">
                    <div class="list-item-title">${item.name}</div>
                </div>
                <button onclick="deleteFromPantry('${item.id}')" style="background: none; border: none; color: var(--danger-color); padding: 8px; cursor: pointer;">
                    🗑️
                </button>
            </div>
        `).join('')}
    `;
};

window.addToPantry = () => {
    const input = document.getElementById('pantry-input');
    const name = input.value.trim();
    
    if (!name) return;
    
    if (state.pantry.some(p => ingredientsMatch(p.name, name))) {
        alert(t('alreadyExists'));
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

const renderShoppingView = (container) => {
    const html = `
        <div class="input-add-bar">
            <input type="text" id="shopping-input" placeholder="${t('newProduct')}">
            <button onclick="addToShopping()">${t('add')}</button>
        </div>
        <div id="shopping-list" class="list-section"></div>
    `;
    container.innerHTML = html;

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
                <h3>${t('emptyList')}</h3>
            </div>
        `;
        return;
    }

    const pending = state.shopping.filter(s => !s.completed);
    const completed = state.shopping.filter(s => s.completed);

    let html = '';

    if (pending.length > 0) {
        html += `<div class="section-header">${t('toBuy')}</div>`;
        html += pending.map(item => createShoppingItem(item)).join('');
    }

    if (completed.length > 0) {
        html += `
            <div class="section-header" style="display: flex; justify-content: space-between; align-items: center;">
                <span>${t('completed')}</span>
                <button onclick="clearCompleted()" style="background: none; border: none; color: var(--primary-color); font-size: 14px; cursor: pointer;">
                    ${t('clear')}
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
                🗑️
            </button>
        </div>
    `;
};

window.addToShopping = () => {
    const input = document.getElementById('shopping-input');
    const name = input.value.trim();
    
    if (!name) return;
    
    if (state.shopping.some(s => ingredientsMatch(s.name, name))) {
        alert(t('alreadyExists'));
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
    if (confirm(t('clearCompleted'))) {
        state.shopping = state.shopping.filter(s => !s.completed);
        Storage.save('shopping', state.shopping);
        renderShoppingList();
    }
};

window.toggleLanguage = toggleLanguage;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}