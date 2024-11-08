# Indicaciones del proyecto

## H1 - Escribir tu primer componente de React.
Se creó el componente generatedPassword.tsx y generationControls.tsx.


## H2 - Crear archivos con múltiples componentes: Crear componentes para los controles de generación (longitud, criterios) y la contraseña resultante.
```ruby
const handleGenerate = () => {
        onGenerate(length, includeUppercase, includeNumbers, includeSymbols);
};

const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newlength = Number(e.target.value);
    // Set minimum length to 8 and maximum length to 16
    if (newlength >= 8 && newlength <= 16) {
        setlength(newlength);
    } else if (newlength < 8) {
        setlength(8); // Reset to minimum length if less than 8
    } else {
        setlength(16); // Reset to maximum length if greater than 16
    }
};
```
### ¿Qué hace este fragmento de código?
Controla la generación de contraseñas: handleGenerate activa la generación con los criterios especificados, y handleLengthChange ajusta la longitud dentro de un rango de 8 a 16 caracteres.
### ¿Cómo cumple con el requisito de la habilidad?
Cumple al separar los controles de longitud y criterios de generación, permitiendo un manejo flexible y preciso de ambos.
### ¿Por qué es la mejor forma de implementarlo?
Es modular y fácil de mantener; asegura que la longitud esté siempre en un rango válido y permite futuros ajustes o ampliaciones sin afectar la estructura básica del código.


## H3 - Usar JSX para crear el formulario de selección de criterios y mostrar la contraseña. 
```ruby
<div className='custom-container'>
            <label>
                Length:
                <input type="number" value={length} onChange={handleLengthChange} min={8} max={16} />
            </label>
            <label>
                Include uppercase letters:
                <input type="checkbox" checked={includeUppercase} onChange={() => setincludeUppercase(!includeUppercase)} />
            </label>
            <label>
                Include Numbers:
                <input type="checkbox" checked={includeNumbers} onChange={() => setincludeNumbers(!includeNumbers)} />
            </label>
            <label>
                Include Symbols:
                <input type="checkbox" checked={includeSymbols} onChange={() => setincludeSymbols(!includeSymbols)} />
            </label>
            <button onClick={handleGenerate}>Generate Password</button>
        </div>
```
### ¿Qué hace este fragmento de código?
Crea un formulario en JSX que permite seleccionar la longitud y los criterios (mayúsculas, números, símbolos) para generar una contraseña. Cada control está vinculado a un estado que se actualiza con las selecciones del usuario.
### ¿Cómo cumple con el requisito de la habilidad?
Utiliza JSX para construir la interfaz gráfica del formulario, cumpliendo con el requisito de mostrar opciones de generación de contraseña y el botón para generarla.
### ¿Por qué es la mejor forma de implementarlo?
Es directo y legible, aprovechando la simplicidad de JSX para gestionar el estado en tiempo real. Esto facilita la actualización de cada campo y hace que el formulario sea fácil de mantener y modificar si se agregan más criterios en el futuro.


## H4 - Usar JSX para crear el formulario de selección de criterios y mostrar la contraseña. 
```ruby
<label>
                Length:
                <input type="number" value={length} onChange={handleLengthChange} min={8} max={16} />
            </label>
            <label>
                Include uppercase letters:
                <input type="checkbox" checked={includeUppercase} onChange={() => setincludeUppercase(!includeUppercase)} />
            </label>
            <label>
                Include Numbers:
                <input type="checkbox" checked={includeNumbers} onChange={() => setincludeNumbers(!includeNumbers)} />
            </label>
            <label>
                Include Symbols:
                <input type="checkbox" checked={includeSymbols} onChange={() => setincludeSymbols(!includeSymbols)} />
</label>
```
### ¿Qué hace este fragmento de código?
Crea un formulario en JSX para que el usuario pueda seleccionar la longitud de la contraseña y los criterios de generación (incluir letras mayúsculas, números y símbolos) usando un input numérico y checkboxes.
### ¿Cómo cumple con el requisito de la habilidad?
Utiliza JSX para construir el formulario de selección de criterios, permitiendo al usuario configurar las opciones para generar una contraseña, cumpliendo con el objetivo de ofrecer una interfaz de selección.
### ¿Por qué es la mejor forma de implementarlo?
Es una solución clara y reactiva: cada opción está vinculada al estado del componente, facilitando la actualización en tiempo real y manteniendo la interfaz organizada y fácil de expandir si se desean añadir más opciones en el futuro.

## H5 - Configurar componentes con props: 
## H6 - Renderizar condicionalmente:

```ruby
              const manejarLongitudChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newLongitud = Number(e.target.value);
        // Set minimum length to 8 and maximum length to 16
        if (newLongitud >= 8 && newLongitud <= 16) {
            setLongitud(newLongitud);
        } else if (newLongitud < 8) {
            setLongitud(8); // Reset to minimum length if less than 8
        } else {
            setLongitud(16); // Reset to maximum length if greater than 16
        }
    };
```

## H7 - Renderizar múltiples componentes a la vez:
   ```
   <div>
            <h1>Generador de Contraseñas Seguras</h1>
            <GenerationControls onGenerar={generarContrasena} />
            <GeneratedPassword contrasena={contrasena}  />
        </div>
  
  ```

## H8 - Mantener componentes puros:

    ```ruby
    
    ```
## H9 - Entender la UI como árboles:
  ```ruby
  ```

## H10 - Controlar eventos del usuario:
    ```ruby
    ```
## H11 - Gestionar el estado:

  ```ruby
  ```

## H12 - Levantar el estado:

  ```ruby
  ```

## H13 - Acceder a valores del DOM:

  ```ruby
  ```

## H14 - Efectos opcionales:
