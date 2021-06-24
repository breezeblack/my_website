$('.main__img__list').waypoint({
    handler(direction) {
    if (direction === 'down') {
    $(this.element).addClass('active');
    }
    else{
    $(this.element).removeClass('active');
    }
    },
    offset: '50%',
    });