// Notes generator.
class Notes {
    constructor() {
        this.notePoints = [];
    }

    addNotes(noteLead, notePoints) {
        let points = {
            noteLead,
            notePoints,
        }
        this.notePoints.push(points);
        return;
    }
}

export { Notes };