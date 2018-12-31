export class Point3D {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    toString() {
        return `p(${this.x},${this.y},${this.z})`;
    }
}
