# Indicaciones del proyecto

## H1 - Escribir tu primer componente de React.
Se creó el componente generatedPassword.tsx

## H2 - Crear archivos con múltiples componentes: Crear componentes para los controles de generación (longitud, criterios) y la contraseña resultante.
```ruby
  const manejarGenerar = () => {
        onGenerar(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos);
    };

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

- ¿Qué hace este fragmento de código?
- ¿Cómo cumple con el requisito de la habilidad?
- ¿Por qué es la mejor forma de implementarlo?

## H3 - Usar JSX para crear el formulario de selección de criterios y mostrar la contraseña. 

```ruby
<div className='custom-container'>
            <label>
                Longitud:
                <input type="number" value={longitud} onChange={manejarLongitudChange} min={8} max={16} />
            </label>
            <label>
                Incluir Mayúsculas:
                <input type="checkbox" checked={incluirMayusculas} onChange={() => setIncluirMayusculas(!incluirMayusculas)} />
            </label>
            <label>
                Incluir Números:
                <input type="checkbox" checked={incluirNumeros} onChange={() => setIncluirNumeros(!incluirNumeros)} />
            </label>
            <label>
                Incluir Símbolos:
                <input type="checkbox" checked={incluirSimbolos} onChange={() => setIncluirSimbolos(!incluirSimbolos)} />
            </label>
            <button onClick={manejarGenerar}>Generar Contraseña</button>
        </div>
```
## H4 - Usar JSX para crear el formulario de selección de criterios y mostrar la contraseña. 
```ruby
            <label>
                Longitud:
                <input type="number" value={longitud} onChange={manejarLongitudChange} min={8} max={16} />
            </label>
            <label>
                Incluir Mayúsculas:
                <input type="checkbox" checked={incluirMayusculas} onChange={() => setIncluirMayusculas(!incluirMayusculas)} />
            </label>
            <label>
                Incluir Números:
                <input type="checkbox" checked={incluirNumeros} onChange={() => setIncluirNumeros(!incluirNumeros)} />
            </label>
            <label>
                Incluir Símbolos:
                <input type="checkbox" checked={incluirSimbolos} onChange={() => setIncluirSimbolos(!incluirSimbolos)} />
            </label>
```
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
