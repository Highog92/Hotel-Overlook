import reservationStyle from './Styles/Reservation.module.scss'

export function Reservation() {

  function saveFormData(event) {

    event.preventDefault()
  }

  return (
    <section className={reservationStyle.reservation}>
      <h2>Reservation</h2>
      <form action="" onSubmit={(event) => saveFormData(event)} >

        <p>Udfyld nedenstående formular for at resevere et af vores værelser</p>
        <div>
          <select name="Destination & hotel">
            <option value="Choose destination">Vælg destination & hotel</option>
            <option value="Danmark">Danmark</option>
            <option value="Finland">Finland</option>
            <option value="Germany">Germany</option>
            <option value="Island">Island</option>
            <option value="Norway">Norway</option>
            <option value="Poland">Poland</option>
            <option value="Sweden">Sweden</option>
          </select>
          <select name="Room type">
            <option value="">Vælg værelsestype</option>
            <option value="">1 værelse</option>
            <option value="">2 værelses</option>
            <option value="">3 værelses</option>
          </select>
        </div>
        <select name="" id="">
          <option value="">Vælg antal personer</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <p>Vælg prisklasse</p>

        <label htmlFor="">
          <input type="radio" />Normal
        </label>

        <label htmlFor="">
          <input type="radio" />Flex
        </label>

        <input type="date" placeholder="Check-in dato" />
        <input type="date" placeholder="Check-out dato" />

        <input type="text" name="firstname" placeholder="Fornavn" />
        <input type="text" name="lastname" placeholder="Efternavn(e)" />

        <div>
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Telefon" />
        </div>

        <textarea name="" id="" cols="30" rows="10" placeholder="Kommentar"></textarea>

        <label htmlFor="">
          <input type="checkbox" /> Jeg accepterer hermed Overlooks betingelser (sæt kryds)
        </label>

        <button>Send reservation</button>

      </form>

    </section>
  )
}
