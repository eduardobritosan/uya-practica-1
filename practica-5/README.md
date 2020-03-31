# Funciones JavaScript:

| Método | Descripción |
| ------------- | ------------- |
| document.getElementById(id)  | Método que retorna una referencia al elemento por su ID.  |
| document.getElementsByTagName(name)  | Método que acepta una etiqueta y devuelve una serie de objetos HTMLCollections que coincidan en nombre con la dicha etiqueta, en el orden en que aparecen en el documento  |
| document.getElementsByClassName(name)  | Método que acepta el nombre de clase especifico y devuelve una colección de objetos HTMLCollections que coincidan en nombre de la clase  |
| element.innerHTML = new html content  | Método cuyo objetivo es devolver o establecer el contenido HTML de un nodo de elemento, remplazando todo lo anterior con la sintaxis nueva  |
| element.attribute = new value  | Método que establece el valor de un atributo en el elemento especificado . Si el atributo ya existe, el valor se actualiza; de lo contrario, se agrega un nuevo atributo con el nombre y el valor especificados  |
| element.style.property = new style  | Método que devuelve un objeto CSSStyledeclaration, el cual es un tipo de estilo.  |
| element.setAttribute(attribute, value)  | Método que establece el valor (value) de un atributo (atribute) en el elemento indicado. Si el atributo ya existe, el valor se actualiza, de lo contrario, se agrega un nuevo atributo con el nombre y el valor especificados  |
| document.createElement(element)  | Método utilizado para crear el elemento HTML. Se crea el elemento especificado usando elementName o se crea un elemento HTML desconocido si no se reconoce el elementName propuesto.  |
| document.removeChild(element)  | El método Node.removeChild() elimina un nodo hijo del DOM y puede devolver el nodo eliminado.  |
| document.appendChild(element) | Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado. Si el hijo(Child) es una referencia(hace referencia) hacia un nodo existente en el documento actual, este es quitado del padre actual para ser puesto en el nodo padre nuevo. La clave está en si el (Child) es una referencia a un nodo existente en el documento.  |
| document.replaceChild(new, old)  | Método que reemplaza un nodo secundario (old) con un nuevo nodo (new).  |
| document.write(text)  | Método que escribe expresiones HTML o código JavaScript en un documento. Se usa principalmente para las pruebas: si se usa después de que un documento HTML está completamente cargado, eliminará todo el HTML existente.  |
| document.getElementById(id).onclick = function(){code}  |  Método que define la accion a realizar a traves de la referencia id devuelta al hacer click a su elemento |