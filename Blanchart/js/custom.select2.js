function customSelect(el){
    var options = [],
    option = $(el).children('option'),
    customSelect;

$(el).hide(); // hide select

// Create custom select
$(option).each(function(){ 
    options.push($(this).html());
});

$(el).after('<ul class="custom-select" data-selected-value="' + options[0] + '">');
customSelect = $(el).siblings('.custom-select');
$(customSelect).append('<li class="selected-option"><span>' + options[0] + '</span>');
$(customSelect).children('.selected-option').append('<ul class="options">');

for(var i = 1; i < options.length; i++) {
    $(customSelect).find('.options').append('<li data-value=' + options[i] + '>' + options[i] + '</li>');
}

// Click action & synchronization with origin select for submitting form     
$(customSelect).click(function(){
    $(this).toggleClass('open');
    $('.options',this).toggleClass('open');
});

$(customSelect).find('.options li').click(function(){
    var selection = $(this).text();
    var dataValue = $(this).attr('data-value');
    var selected = $(customSelect).find('.selected-option span').text(selection);
    for(var i = 1; i < option.length; i++) {
        if($(option[i]).text() === selected.text()) {
            $(option[i]).attr('selected', 'true');
            $(option[i]).siblings().removeAttr('selected');
        }
    };

    $(customSelect).attr('data-selected-value',dataValue);
});
};


customSelect('#slct');