export interface image {
    id: string; // unique number for each image to track
    height: number; //height of the image
    width: number; //width of the image
    top: number; // y position of image
    left: number; // x position of image
    angle: number; // rotation used for margin of error
    free: boolean; // whether or not image can move freely
    reflected: boolean; // whether or not piece is reflected
    path: string; // path of the image
}
