import { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import filter from "./helpers/filter";
import shortid from "shortid";
import s from "./App.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleAddContact = (contact) => {
    this.state.contacts.some((userName) => userName.name === contact.name) ? alert("A user with the same name has already been added") :
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: shortid.generate(), ...contact }],
    }));
  }
    
  deliteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  handleChangeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div className={s.app}>
        <ContactForm handleAddContact={this.handleAddContact} />
        <Filter
          filter={this.state.filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <ContactList
          contacts={filter(this.state.contacts, this.state.filter)}
          deliteContact={this.deliteContact}
        />
      </div>
    );
  }
}

export default App;
