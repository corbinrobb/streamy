import React from "react";
import { connect } from "react-redux";
import { deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        Are you sure you want to delete this stream?{" "}
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStream(id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default connect(null, { deleteStream })(StreamDelete);
