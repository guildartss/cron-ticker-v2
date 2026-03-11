/**
 * Módulo de utilidades matemáticas
 * Agregado para tener más funciones que testear en GitHub Actions
 */

const multiply = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los argumentos deben ser números');
    }
    return a * b;
};

const isEven = (n) => {
    if (typeof n !== 'number') {
        throw new Error('El argumento debe ser un número');
    }
    return n % 2 === 0;
};

const getGreeting = (name) => {
    if (!name || typeof name !== 'string') {
        throw new Error('Se requiere un nombre válido');
    }
    return `Hola, ${name}!`;
};

const divide = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los argumentos deben ser números');
    
};

module.exports = {
    multiply,
    isEven,
    getGreeting,
    divide
};
