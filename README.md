## Inspiration
2d online school sad. Jokes aside, our team thought felt that online learning could use some improvement. Research from [Columbia University](https://www.sciencedaily.com/releases/2020/04/200428093519.htm ) has shown that approximately 3 million US students (3~4% of the population) may suffer from visual-spatial learning disabilities. We felt that these students would be particularly marginalized by conventional online learning platforms, which do not give students an opportunity to interact with real 3d objects in real time. We wanted to change and empower students in the classrooms, regardless of their abilities, and create fair learning opportunities for everyone. 

## What it does
Dimension is a web app that allows users to experience online learning in a whole new dimension. Dimension provides an immersive learning experience using 3D streaming technology that allows students to see the depth of the video, which can help them learn in ways never possible before. 

## How we built it
### Web
For the frontend, we used React to setup a modern platform for users to browse and search for courses and creators. We also used Figma to design a responsive and convenient UI for our users 💖.

### Chatterbox
We built a chatting application so users could ask questions and communicate with each other real time! The chat was built using React on the front-end and Express/Node for the server. We also used DataStax's cloud Cassandra database to persist user messages. We used [this open source repo](https://github.com/davidzas/react-chat) to start us off.

### 3D Transmission
To capture the 3D data in real time, we used the Record3D library along with an iPhone 11. We read the depth & texture data stream in python and encode it into a traditional RGB image using an implementation of a [multi-wavelength depth encoding](https://www.osapublishing.org/ao/abstract.cfm?uri=ao-54-36-10684) method. We then transmit the encoding and texture images along with some extra parameters over a Socket.IO connection to the backend streaming server.

The streaming server's responsibility is to distribute data from streamer to viewers. When the streaming server receives a new depth payload, it forwards it to clients who are connected to view the stream.

On the client side, we used [ThreeJS](https://threejs.org/) to render our 3D data in WebGL. When the client receives a depth & texture payload, it performs a multi-wavelength depth decoding to retrieve the original depth data. The client then moves the depth and texture data into a Three PlaneBufferGeometry to be rendered.

## Challenges we ran into
* Achieving robust, high frame rate 3D streaming over network can be challenging, especially over the course of 48 hours. Factors like network speed and local processing power (on both the streaming and viewing clients) can bottleneck performance.
* Gracefully integrating the streaming and chat client pages into the rest of the frontend was initially a challenge. More foresight into how we'd build everything out would have made integration easier to execute.
* 

## Accomplishments that we're proud of
* Achieving high quality 3D transmission/rendering
* Building out all 3 parts of the MVP for our project 

## What we learned
* 3D sensors can vary in quality greatly depending on their capture technique.
* 

## What's next for dimension
* Swap from Socket.IO to WebRTC video streaming to improve on current latency/throughput.
* Change out our 3D rendering and chat iframe embeds for React components.
