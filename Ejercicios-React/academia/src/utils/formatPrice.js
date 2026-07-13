/**
 * Formatea un numero como precio en pesos argentinos, ej: 35000 -> "$35.000,00"
 * @param {number} precio - valor numerico del precio
 * @return {string} precio formateado como moneda
 */
export const formatPrice = (precio) => {
    return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(precio);
};
