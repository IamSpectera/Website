import React from "react";
import ReactAvatarEditor from "react-avatar-editor";
import "./UploadImage.css";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      allowZoomOut: false,
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      rotate: 0,
      borderRadius: 50,
      preview: null,
      width: 300,
      height: 300,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNewImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.setState({ image: event.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  handlePositionChange = (position) => {
    this.setState({ position });
  };

  setEditorRef = (editor) => (this.editor = editor);

  async handleSubmit(e) {
    e.preventDefault();
    if (this.editor) {
      const img = this.editor.getImageScaledToCanvas().toDataURL();
      console.log(img); // You can handle the image data URL as needed
    }
  }

  render() {
    return (
      <div className='uploadOver'>
        <div className='editorContainer'>
          <ReactAvatarEditor
            ref={this.setEditorRef}
            image={this.state.image}
            scale={parseFloat(this.state.scale)}
            width={this.state.width}
            height={this.state.height}
            position={this.state.position}
            onPositionChange={this.handlePositionChange}
            rotate={parseFloat(this.state.rotate)}
            borderRadius={this.state.borderRadius}
            color={[255, 255, 255, 0.6]} // RGBA
            className="editor-canvas"
          />
        </div>
        <br />
        <label>
          <input className='uploadBtn'
            name="upload-img-input"
            type="file"
            onChange={this.handleNewImage}
          />
        </label>
        <br />
        <input
          name="scale"
          type="range"
          onChange={this.handleScale}
          min={this.state.allowZoomOut ? "0.1" : "1"}
          max="2"
          step="0.01"
          defaultValue="1"
        />
        <div className="buttons-container">
          <button onClick={this.handleSubmit}>SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default UploadImage;