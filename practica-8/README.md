# Practica 8 Evaluación automática de la accesibilidad

## GRUPO 18

### David Rodríguez Rodríguez

### Sergio Torres Rodríguez

### Eduardo Ernesto Brito Sanchez

CERMI
Validadores de HTML y CSS del W3C
Validador de HTML
El siguiente error se debe a que el validador W3C valida contra las reglas de serialización de html 

Error: Attribute xmlns:content not allowed here.
From line 1, column 16; to line 11, column 48
TYPE html>↩<html xml:lang="es" version="HTML 5" dir="ltr"↩  xmlns:content="http://purl.org/rss/1.0/modules/content/"↩  xmlns:dc="http://purl.org/dc/terms/"↩  xmlns:foaf="http://xmlns.com/foaf/0.1/"↩  xmlns:og="http://ogp.me/ns#"↩  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"↩  xmlns:sioc="http://rdfs.org/sioc/ns#"↩  xmlns:sioct="http://rdfs.org/sioc/types#"↩  xmlns:skos="http://www.w3.org/2004/02/skos/core#"↩  xmlns:xsd="http://www.w3.org/2001/XMLSchema#">↩↩<hea

Error debido a que los atributos usados actualmente son innecesarios.
Error: The version attribute on the html element is obsolete. You can safely omit it.
From line 1, column 16; to line 11, column 48
TYPE html>↩<html xml:lang="es" version="HTML 5" dir="ltr"↩  xmlns:content="http://purl.org/rss/1.0/modules/content/"↩  xmlns:dc="http://purl.org/dc/terms/"↩  xmlns:foaf="http://xmlns.com/foaf/0.1/"↩  xmlns:og="http://ogp.me/ns#"↩  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"↩  xmlns:sioc="http://rdfs.org/sioc/ns#"↩  xmlns:sioct="http://rdfs.org/sioc/types#"↩  xmlns:skos="http://www.w3.org/2004/02/skos/core#"↩  xmlns:xsd="http://www.w3.org/2001/XMLSchema#">↩↩<hea

Warning debido a que el atributo “type” no es necesario añadirlo cuando linkeamos un javascript

Warning: The type attribute is unnecessary for JavaScript resources.
From line 87, column 1; to line 87, column 31
</script>↩<script type="text/javascript">↩<!--/

Validador de CSS
Cuando pasamos el validador de css nos aparecen tres errores, el primero  y tercero debido a errores sintácticos, y el segundo debido al uso de una propiedad no válida



WAVE
Al pasar sar la herramienta WAVE podemos ver que tenemos varios errores, debido a que la imágenes no disponen de un texto alternativos, en el contraste vemos que no nos muestra ninguno problema, y nos marca algunos warning sobre varios link redundantes.


Contraste de Colores
Al pasar esta herramienta podemos comprobar que nos da el mismo resultado que la anterior ya que no encuentra ningún problema respecto al contraste.













Página del Cabildo de Tenerife

Validadores de HTML y CSS del W3C
Validador HTML.

El siguiente error es causado debido a que el elemento style se encuentra en el body cuando debería encontrarse en el head de la página.

Error: Element style not allowed as child of element body in this context. (Suppressing further errors from this subtree.)
From line 39, column 1; to line 39, column 7
mid-277">↩<style>↩#syst
Contexts in which element style may be used:
Where metadata content is expected.
In a noscript element that is a child of a head element.
Content model for element body:
Flow content.

El siguiente error se debe a que no se ha introducido un valor y la cadena vacia no es aceptada.

Error: Bad value for attribute size on element input: The empty string is not a valid positive integer.
From line 119, column 3; to line 121, column 53
earch">↩		<input type="text" class="fc_text_filter fc_index_complete_simple fc_basic_complete fc_label_internal"↩				data-fc_label_text="Añadir término" name="searchword" size="" maxlength="200" ↩				id="search_searchword" value="Añadir término"  /><input


El siguiente error es causado en que en la línea 167 de la página está llamando dos veces al atributo “class” cuando únicamente es necesario realizarlo una vez separado por espacio las distintas clases.

Error: Duplicate attribute class.
At line 167, column 92
136/1750" class="link">Ver más


El siguiente error es repetido varias veces en la página y ocurre a debido a que se están usando caracteres no permitidos en los atributos.

Error: Bad value https://sede.tenerife.es/sede/es/tramites-y-servicios?filter_15[3]=1 for attribute href on element a: Illegal character in query: [ is not allowed.
From line 295, column 5; to line 295, column 83
</li>↩<li><a href="https://sede.tenerife.es/sede/es/tramites-y-servicios?filter_15[3]=1">Ayudas


Error causado igual que el anterior de “class” pero esta vez con el atributo “id”

Error: Duplicate attribute id.
At line 518, column 121
id" value="" id="agenda_date"


El siguiente “Warning” se repite varias veces, que significa que hay atributos que no son usados ni en css ni en javascript


Warning: The type attribute is unnecessary for JavaScript resources.
From line 587, column 4; to line 587, column 87
>↩	↩	↩↩	  <script src="/portalcabtfe/media/system/js/mootools-core.js" type="text/javascript"></script>



Validador de CSS.

Cuando pasamos la página por el validador de CSS nos muestra que tiene 8 fallos, dos de estos errores son sintácticos, y el resto son propiedades usadas que no son válidas
 



WAGE
Después de realizar el análisis podemos observar que nos muestra que tenemos principalmente un gran número de warning, también vemos que hay problemas con el contraste  y dos errores.




Contraste de Colores

Cuando pasamos la herramienta “a11y” que analiza la página web nos muestra que detecta tres problemas de contraste en los siguientes elementos de la página, pero comparando con en anterior analizador en el que se nos marcaba que había cuatro errores de contrastes, es debido a que es analizador no únicamente detecta una sola vez el error de contraste cuando tienen los mismos colores, ya que el apartado “Servicios y Trámites” tiene los mismo colores que “Becas, Ayudas y Subvenciones” y no no los está detectando.








Página la Caixa.
Validadores de HTML y CSS W3C
Validador de HTML
La página contiene muchos errores de este tipo que se debe a que el contenido dentro de la etiqueta “meta” no se se corresponde al debido.

Error: A document must not include more than one meta element with a http-equiv attribute whose value is content-type.
From line 27, column 1; to line 27, column 67
ixa now">↩<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">↩<meta

En la web se pueden encontrar varios de estos errores, se deben a que el valor Pragma no debe ir en el atributo “http-equiv”. 
Error: Bad value Pragma for attribute http-equiv on element meta.
From line 28, column 1; to line 28, column 45
t=UTF-8">↩<meta http-equiv="Pragma" content="no-cache">↩<meta

El siguiente “Warning” se repite varias veces, que significa que hay atributos que no son usados ni en css ni en javascript.

Warning: The type attribute is unnecessary for JavaScript resources.
From line 119, column 1; to line 119, column 101
endif]-->↩<script src="/deployedfiles/common/JavaScript/aplnr/cookie/cookie-policy.js" type="text/javascript" ></script>
Validador de CSS

Al pasar el validador de css nos detecta dos errores, el primero sobre el uso de una propiedad no válida y el segundo sobre un error sintáctico.



WAVE

Al realizar el análisis con “WAVE” nos muestra, que tenemos tres errores debido a botones vacíos, que tenemos seis errores de contraste y varios warning. 



Contraste de Colores
Cuando pasamos la herramienta “a11y” que analiza la página web nos muestra que tenemos dos fallos de contrastes uno en “Familias” y otro en “1”






  

















