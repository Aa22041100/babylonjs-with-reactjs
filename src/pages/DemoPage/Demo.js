import React, { Component } from 'react';
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from '@babylonjs/core';
import { makeStyles } from '@material-ui/styles';
import SceneComponent from '../../components/SceneComponent';
import './Demo.js';

let box;

const styles = {
  canvasContainer: {
    width: '100%',
    height: '100%'
  }
}

class DemoPage extends Component {

  onSceneReady = (scene) => {
    // This creates and positions a free camera (non-mesh)
    var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    // camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 1;

    // Our built-in 'box' shape.
    box = MeshBuilder.CreateBox("box", {size: 2}, scene);

    // Move the box upward 1/2 its height
    box.position.y = 1;

    // Our built-in 'ground' shape.
    MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
  }

  onRender = (scene) => {
    if (box !== undefined) {
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
  
      const rpm = 10;
      box.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    }
  }

  render() {
    return(
      <div style={{flex: 1}}>
        <SceneComponent antialias onSceneReady={this.onSceneReady} onRender={this.onRender} id="my-canvas" style={styles.canvasContainer} />
      </div>
    );
  }
}

export default DemoPage;
