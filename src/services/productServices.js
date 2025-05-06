export const getProducts = async () => {
    try {
        const response = await fetch('/api/products.json', {
        method: 'GET',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return null;
    }
    };

