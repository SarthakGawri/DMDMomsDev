
document.addEventListener('DOMContentLoaded', function() {
    const elem = document.getElementById('expand-mh');

    elem.addEventListener('click', function() {
        let mh = document.getElementById('mh-dropdown');

        if (mh.style.display === 'none') {
            mh.style.display = 'block';

            document.querySelector('.exp').style.display = 'block';
            
            console.log('testing');
        } else {
            mh.style.display = 'none';
            
            document.querySelector('.exp').style = '';
            
            console.log('test2');
        }   
    })
})
