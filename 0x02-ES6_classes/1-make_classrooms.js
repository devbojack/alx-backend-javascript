import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  // const sizes = [19,20, 34];
  // const rooms = sizes.map(size => new ClassRoom(size));
  // return rooms;
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
