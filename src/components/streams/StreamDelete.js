import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { deleteStream, fetchStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete ${this.props.stream.title}?`;
  }

  render() {
    const { id } = this.props.match.params;
    const actions = (
      <>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStream(id)}
        >
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </>
    );

    return (
      <div>
        <Modal
          header="Delete Stream"
          content={this.renderContent()}
          actions={actions}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
