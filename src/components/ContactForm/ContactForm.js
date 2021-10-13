import { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) =>
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddContact(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };

    render() {
      const { handleChange, handleSubmit, state: { name, number } } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            value={name}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
