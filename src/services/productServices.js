import { collection, getDocs, doc, getDoc } from "firebase/firestore"; 
import { database } from "../Config/firebase"; 


export const getProducts = async () => {
    try {
        const products_collections_reference = collection(database, 'Productos') 
        
        const result = await getDocs(products_collections_reference) 
        const product_list_formatted = result.docs.map(
            (document) => {
                return{
                    id: document.id,
                    ...document.data()
                }
            }
        )
        return product_list_formatted
        } catch (error) {
        console.error('Error al obtener productos:', error);
        return null;
    }
    };



export const getProductById = async (id) => {
  try {
    const product_document_reference = doc(database, 'Productos', id); 
    const result = await getDoc(product_document_reference); 

    if (result.exists()) { 
      return {
        id: result.id,
        ...result.data()
      };
    } else {
      console.log("No se encontró el documento con ID:", id);
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el producto por ID:', error);
    return null;
  }
};


