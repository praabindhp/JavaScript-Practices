const x = 9;

const color = x > 10 ? 'Red' : 'Blue'; // Blue
const color2 = 'Green'; // NOT Red Or Blue
const color3 = 'Blue'; // Color Is Blue

switch (color) {
    case 'Red':
        console.log('Color Is Red');
        break;
    case 'Blue':
        console.log('Color Is Blue');
        break;
    default:
        console.log('Color Is NOT Red Or Blue');
        break;
}

// End Of The Program