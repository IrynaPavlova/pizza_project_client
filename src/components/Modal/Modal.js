import React, { Component, createRef } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === this.backdropRef.current) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div
        className={styles.Overlay}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div>{this.props.children}</div>
      </div>
    );
  }
}
// in your component do this to use modal window
/*
state={
  showModal: false,
}
handleShowComponent = () => {
  this.setState({
  showModal: true,
    });
  };
toggleModal = () => {
    this.setState({
      showModal: false
    });
  };
{showModal && (
  <Modal onClose={this.toggleModal}>
    <Component />
   </Modal>
)}
*/
