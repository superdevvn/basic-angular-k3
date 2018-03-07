export function link(height:number, color:string, url:string) {
    this.height = height || 50;
    this.color = color || 'red';
    this.url = url || 'superdev.edu.vn';
    alert(height);
    alert(color);
    alert(url);
}

//link(100, 'blue', 'fb/superdevvn');