$(document).ready(function () 
{
    var finish = $('#overallidentifier').html();
    var Huddle = "Huddle Room ($5K - $10K)";
    var Meeting = "Meeting Room (20K - 30K)";
    var Conference = "Conference Suite ($30K - $50K)";
    var Custom = "Custom Option";
    var num1 = 0;
    var num2 = 0;
    $('#customAddon').hide();
    
    // animations for next button and back buttons
    $('body').on('click', '.next', function () 
    {
    var id = $('.content:visible').data('id');
    var nextId = $('.content:visible').data('id') + 1;
    $('[data-id="' + id + '"]').hide();
    $('[data-id="' + nextId + '"]').show();
    if ($('.back:hidden').length == 1) 
    {
        $('.back').show();
    }
    // animation for final result
    if (nextId == 5) 
    {
        $('.content-holder').hide();
        $('.end').show();
    }
    }).click('.next');
    // function that uses logic of back function 
    $('body').on('click', '.back', function ()
    {
    var id = $('.content:visible').data('id');
    var prevId = $('.content:visible').data('id') - 1;
    $('[data-id="' + id + '"]').hide();
    $('[data-id="' + prevId + '"]').show();
    $('.next').show();
    if (prevId == 1)
    {
        $('.back').hide();
    }
    });
    // function that uses logic of edit previous button
    $('body').on('click', '.edit-previous', function () 
    {
    $('.end').hide();
    $('.content-holder').show();
    $('#content-4').show();
    });
    // function with logic that hides/shows next button based on possible user actions within question 1
    $(this).find("option:selected").each(function () 
    {
        var choice = jQuery('#customerType');
        var select = this.value;
        choice.change(function () 
        {
            if ($(this).val() === "") 
            {
                $('.next').hide();
            }
            else
            {
                $(".next").show();
            }
        });
    });
    // function with logic that hides/shows next button on appearance of question 2
    $('#content-2').on('show', function () {

        var checked = $('#AVcomfort').find(':checked').length;
        if (!checked) {
            $('.next').hide();
        } else {
            $('.next').show();
        }

    });
    // function with logic that hides/shows next button based on possible user actions within question 2
    $('.other').on('click', function () 
    {
        var checked = $('#AVcomfort').find(':checked').length;
        if (!checked)
        {
            $('.next').hide();
        }
        else 
        {
            $('.next').show();
        }
        /* functions that uses grouping of checkboxes in question 2 to automatically uncheck boxes in any class that is not other
        and varifies that at least 1 checkbox has been selected before showing next button*/
        $('.db').each(function () {
            $(this).prop('checked', false);
        });
        $('.other2').each(function () {
            $(this).prop('checked', false);
        });
        
    });
        /* function that uses grouping of checkboxes in question 2 to automatically uncheck boxes in any class that is not db
        and varifies that at least 1 checkbox has been selected before showing next button*/
        $('.db').on('click', function () 
        {
        var checked = $('#AVcomfort').find(':checked').length;
        if (!checked) 
        {
            $('.next').hide();
        }
        else 
        {
            $('.next').show();
        }
        $('.other').prop('checked', false);
        $('.other2').prop('checked', false);
        });
        /* function that uses grouping of checkboxes in question 2 to automatically uncheck boxes in any class that is not other2
        and varifies that at least 1 checkbox has been selected before showing next button*/
        $('.other2').on('click', function () {
        var checked = $('#AVcomfort').find(':checked').length;
        if (!checked)
		{
            $('.next').hide();
        } 
		else
		{
            $('.next').show();
        }
        $('.other').prop('checked', false);
        $('.db').prop('checked', false);
        });
    // function with logic that hides/shows next button on appearance of question 3
    $('#content-3').on('show', function () {

        if ($("#size1")[0].selectedIndex <= 0 || $("#size2")[0].selectedIndex <= 0) 
        {
            $('.next').hide();
        }
        else
        {
            $('.next').show();
        }

    });

    // function with logic that hides/shows next button based on possible user actions within question 2
    $(this).find("option:selected").each(function () 
    {
        var choice2 = jQuery('#size1');
        var select2 = this.value;
        choice2.change(function () 
        {
            var number1 = +($(this).val());
            var identifier = 400;
            if ($(this).val() === "") 
            {
                $('.next').hide();
            }
            //part of if statement that gives variable num1 its value            
            else
            {
                if ($(this).val() == "Unknown")
                {
                    number1 = 0;
                    num1 = number1;
                }
                if(($(this).val() == "30+"))
                {
                       number1 = 30;
                       num1 = number1;
                }
                if ($(this).val() != "Unknown" && $(this).val() != "30+" )
                {
                    num1 = number1;
                }
                // part of function that gives num2 its value
                var choice3 = jQuery('#size2');
                var select3 = this.value;
                choice3.change(function () 
                {
                    var number2 = +($(this).val());
                    var identifier = 400;
                    if ($(this).val() === "") 
                    {
                        $('.next').hide();
                    }
                    else 
                    {
                         if ($(this).val() == "Unknown")
                        {
                            number2 = 0;
                            num2 = number2;
                        }
                        if(($(this).val() == "30+"))
                        {
                            number2 = 30;
                            num2= number2;
                        }
                        if ($(this).val() != "Unknown" && $(this).val() != "30+" )
                        {
                            num2 = number2;
                        }
                        $('.next').show();
                    }
                });
            }
        });
        // validates in reverse order to prevent possible bug
        var choice4 = jQuery('#size2');
        var select4 = this.value;
        choice4.change(function () 
        {
            var number2 = +($(this).val());
            var identifier = 400;
            if ($(this).val() === "")
            {
                $('.next').hide();
            }
            else 
            {
                if ($(this).val() == "Unknown")
                {
                    number2 = 0;
                    num2 = number2;
                }
                if(($(this).val() == "30+"))
                {
                   number2 = 30;
                   num2= number2;
                }
                if ($(this).val() != "Unknown" && $(this).val() != "30+" )
                {
                    num2 = number2;
                }
                var choice5 = jQuery('#size1');
                var select5 = this.value;
                choice5.change(function () 
                {
                    var number1 = +($(this).val());
                    var identifier = 400;
                    if ($(this).val() === "") 
                    {
                        $('.next').hide();
                    }
                    else 
                    {
                        if ($(this).val() == "Unknown")
                        {
                            number1 = 0;
                            num1 = number1;
                        }
                        if(($(this).val() == "30+"))
                        {
                            number1 = 30;
                            num1 = number1;
                        }
                        if ($(this).val() != "Unknown" && $(this).val() != "30+" )
                        {
                            num1 = number1;
                        }
                        $('.next').show();
                    }
                });
            }
             
        });
    });
    // hides/shows next button on appearance of question 4    
    $('#content-4').on('show', function ()
    {
        var checked = $('#wire').find(':checked').length;
        if (!checked)
		{
            $('.next').hide();
        } 
		else 
		{
            $('.next').show();
        }
		// if statement that decides output 
        if (num1 * num2 > 400)
        {
            $('#overallidentifier').html(Custom);
            $('#customAddon').show();
        }
		else if ($('input[value="I am a novice and would like you to connect me to an installer"]').prop("checked"))
		{
		    $('#overallidentifier').html(Conference);
		    $('#customAddon').hide();
		}
		else if (num1 * num2 > 200)
		{
		    $('#overallidentifier').html(Meeting);
		    $('#customAddon').hide();
		}
		else 
		{
		    $('#overallidentifier').html(Huddle);
		    $('#customAddon').hide();
		}
    });

    //function with logic that hides/shows next button based on possible user actions within question 4
    $('.wiring').on('click', function () 
    {
        var checked = $('#wire').find(':checked').length;
        if (!checked) 
        {
            $('.next').hide();
        }
        else
        {
            $('.next').show();
        }
    });
});
// custom on div show/hide function constructer
(function ($) 
{
    $.each(['show', 'hide'], function (i, ev) 
    {
        var el = $.fn[ev];
        $.fn[ev] = function () 
        {
            this.trigger(ev);
            return el.apply(this, arguments);
        };
    });
})(jQuery);