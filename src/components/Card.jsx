function Card() {
return (
    <div className="card">
    <h2>Formulario de contacto</h2>
    <form>
        <div className="input-group">
        <label>
            Nombre:
            <input type="text" name="nombre" />
        </label>
        </div>
        <div className="input-group">
        <label>
            Email:
            <input type="email" name="email" />
        </label>
        </div>
        <div className="input-group">
        <label>
            Mensaje:
            <textarea name="mensaje" rows="4" />
        </label>
        </div>
        <button className="send" type="submit">Enviar</button>
    </form>
    </div>
)
}

export default Card