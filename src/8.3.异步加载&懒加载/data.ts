export const data = {
  name: "Tom",
  default: {
    deviceKey: "Oculus Go",
    stereoEffect: true,
  },
  devices: {
    None: {
      id: "None",
      name: "None",
      modes: ["inline"],
    },
    "Google cardboard": {
      id: "Google cardboard",
      name: "Google cardboard",
      modes: ["inline", "immersive-vr"],
      headset: {
        hasPosition: false,
        hasRotation: true,
      },
    },
    "HTC Vive": {
      id: "HTC Vive",
      name: "HTC Vive",
      modes: ["inline", "immersive-vr"],
      headset: {
        hasPosition: true,
        hasRotation: true,
      },
      controllers: [
        {
          id: "OpenVR Gamepad",
          buttonNum: 3,
          primaryButtonIndex: 0,
          primarySqueezeButtonIndex: 1,
          hasPosition: true,
          hasRotation: true,
          hasSqueezeButton: true,
        },
        {
          id: "OpenVR Gamepad",
          buttonNum: 3,
          primaryButtonIndex: 0,
          primarySqueezeButtonIndex: 1,
          hasPosition: true,
          hasRotation: true,
          hasSqueezeButton: true,
        },
      ],
    },
    "Oculus Go": {
      id: "Oculus Go",
      name: "Oculus Go",
      modes: ["inline", "immersive-vr"],
      headset: {
        hasPosition: false,
        hasRotation: true,
      },
      controllers: [
        {
          id: "Oculus Go Controller",
          buttonNum: 3,
          primaryButtonIndex: 0,
          hasPosition: false,
          hasRotation: true,
          hasSqueezeButton: false,
        },
      ],
    },
    "Oculus Quest": {
      id: "Oculus Quest",
      name: "Oculus Quest",
      modes: ["inline", "immersive-vr"],
      headset: {
        hasPosition: true,
        hasRotation: true,
      },
      controllers: [
        {
          id: "Oculus Touch (Right)",
          buttonNum: 7,
          primaryButtonIndex: 0,
          primarySqueezeButtonIndex: 1,
          hasPosition: true,
          hasRotation: true,
          hasSqueezeButton: true,
        },
        {
          id: "Oculus Touch (Left)",
          buttonNum: 7,
          primaryButtonIndex: 0,
          primarySqueezeButtonIndex: 1,
          hasPosition: true,
          hasRotation: true,
          hasSqueezeButton: true,
        },
      ],
    },
    "Samsung Galaxy S8+ (AR)": {
      id: "Samsung Galaxy S8+ (AR)",
      name: "Samsung Galaxy S8+ (AR)",
      modes: ["inline", "immersive-ar"],
      features: ["hit-test"],
      headset: {
        hasPosition: true,
        hasRotation: true,
      },
      controllers: [
        {
          buttonNum: 1,
          primaryButtonIndex: 0,
          hasPosition: true,
          hasRotation: true,
        },
        {
          buttonNum: 1,
          primaryButtonIndex: 0,
          hasPosition: true,
          hasRotation: true,
        },
      ],
      resolution: {
        width: 1440,
        height: 2960,
      },
      size: {
        width: 0.0734,
        height: 0.1595,
        depth: 0.0081,
      },
    },
    "Samsung Gear VR": {
      id: "Samsung Gear VR",
      name: "Samsung Gear VR",
      modes: ["inline", "immersive-vr"],
      headset: {
        hasPosition: false,
        hasRotation: true,
      },
      controllers: [
        {
          id: "Gear VR Controller",
          buttonNum: 3,
          primaryButtonIndex: 0,
          hasPosition: false,
          hasRotation: true,
        },
      ],
    },
  },
};
