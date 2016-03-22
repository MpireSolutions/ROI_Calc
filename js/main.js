
$.fn.digits = function(){ 
    return this.each(function(){ 
    $(this).val( $(this).val().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }
  
$( document ).ready(function() {
    
    var screen_height = $( window ).height();
   if ($(window).width()  > 768) {
        $( ".home-section").css( "height" , screen_height );
        $( ".all-pages-section").css( "height" , screen_height )
    }
    
    
    var flip_textbox1;
    var flip_textbox2;
    var flip_textbox3;
    var state;
    
    $( ".state-select" ).change(function() {
        $( ".state-select" ).hide();
        $( '.home-people-1' ).show();
        $( '.home-people-2' ).show();
    });
    
    $( '.all-pages-section' ).hide();
    $( '.home-people-1' ).hide();
    $( '.home-people-2' ).hide();
    /* Flip Section Start */
    $( '.home-people-1' ).click(function(){
        window.scrollTo($('.home-section'), 0);
        $( '.home-section' ).hide();
        $( '.all-pages-section' ).show();
        $( '#flip_start' ).hide();
        $( '#hold_start' ).hide();
        $( '.flip-slide1' ).show();
        $( '.hold-slide1' ).hide(); 
    });
    
    $( '#flip_people_1' ).click(function(){
        Flip_Cash_Leverage();
        window.scrollTo($('.home-section'), 0);
        $( '.flip-slide1' ).hide();
        $( '.flip-slide2' ).show();
        $( '#flip_start' ).show();
        $( '.flip-slide3' ).hide();
        $( '#flip-slide4' ).hide();
        $( "#flip_calculate" ).show();
        $( "#flip_power_lev" ).show();
    });
    
    $( '#flip_people_2' ).click(function(){
        Flip_Lender();
        window.scrollTo($('.home-section'), 0);
        $( '#flip-slide4' ).show();
        $( '#flip_start' ).show();
        $( '.all-pages-section' ).show();
        $( '.flip-slide1' ).hide();
        $( '.flip-slide2' ).hide();
        $( '.flip-slide3' ).hide();
    });
    
    $( '.back' ).click(function(){
        window.scrollTo($('.home-section'), 0);
        $( '.all-pages-section' ).hide();
        $( '.home-section' ).show();
    });
    
    $( '.flip_back' ).click(function(){
        window.scrollTo($('.home-section'), 0);
        $( '.flip-slide1' ).show();
        $( '.flip-slide2' ).hide();
        $( '.flip-slide3' ).hide();
        $( '#flip-slide4' ).hide();
        
    });
    
    $( '.hold_back' ).click(function(){
        $( '.hold-slide1' ).show();
        $( '#hold_start' ).hide();
        $( '.hold_start-slide-1' ).hide();
        $( '.hold-slide2' ).hide();
        $( '.hold-slide3' ).hide();
    });
    
    $( '.back_menu' ).click(function(){
        window.scrollTo($('.home-section'), 0);
        $( '.all-pages-section' ).hide();
        $( '.home-section' ).show();
    });
    
    
    $( '#flip_power_lev' ).click(function(){
        $( "#flip_calculate" ).hide();
        $( "#flip_power_lev" ).hide();
        $( '.flip-slide2' ).hide();
        $( '.flip-slide3' ).show();
        var text1 = $( "#flip_TextBox1" ).val();
        var text2 = $( "#flip_TextBox2" ).val();
        var text3 = $( "#flip_TextBox3" ).val();
        
        $( "#pl_text1" ).val( text1 );
        $( "#pl_text2" ).val( text2 );
        $( "#pl_text3" ).val( text3 ); 
    });
    
    $( "#flip_next" ).click(function(){
       $( ".flip-slide3" ).hide();
       $( "#hold_start" ).show();
       $( '.hold_start-slide-1' ).show();
       $( ".hold-slide2" ).hide();    
       $( ".hold-slide3" ).hide();
    });
    
    $( "#next_lev" ).click(function(){
        Hold_Lender();
        $( "#flip-slide4" ).hide();
        $( "#flip_start" ).hide();
        $( "#hold_start" ).show();
        $( ".hold_start-slide-1" ).hide();
        $( ".hold-slide2" ).hide();
        $( ".hold-slide3" ).show();
    });
    
    /* Flip Section END */
    
    
    /* Hold Section Start */
    $( '.home-people-2' ).click(function(){
        window.scrollTo($('.home-section'), 0);
        $( '.home-section' ).hide();
        $( '.all-pages-section' ).show();
        $( '#flip_start' ).hide();
        $( '#hold_start' ).hide();
        $( '.hold-slide1' ).show();
        $( '.flip-slide1' ).hide();
    });
    
    $( '#hold_people_1' ).click(function(){
        window.scrollTo($('.home-section'), 0);
        $( "#hold_start" ).show();
        $( '.home-section' ).hide();
        $( '.all-pages-section' ).show();
        $( '.hold-slide1' ).hide();
        $( '.hold_start-slide-1' ).show();
        $( '.hold-slide2' ).hide();
        $( '.hold-slide3' ).hide();
        
    });
    
    $( '#hold_people_2' ).click(function(){
        Hold_Lender();
        window.scrollTo($('.home-section'), 0);
        $( "#hold_start" ).show();
        $( '.home-section' ).hide();
        $( '.all-pages-section' ).show();
        $( '.hold-slide1' ).hide();
        $( '.hold-slide2' ).hide();
        $( '.hold-slide3' ).show();
        $( '.hold_start-slide-1' ).hide();
        $( '.hold-slide2' ).hide();
        
        
    });
    
    $( '#hold_power_lev' ).click(function(){
        window.scrollTo($('.home-section'), 0);
        $( "#hold_start" ).show();
        $( '.home-section' ).hide();
        $( '.all-pages-section' ).show();
        $( '.hold-slide1' ).hide();
        $( '.hold-slide2' ).show();
        $( '.hold-slide3' ).hide();
        $( '.hold_start-slide-1' ).hide();
        
        
    });
    
    
    /* Hold Lender Vs Lender Calculation Click */
    $( '#Hold_Lender_calculate' ).click(function(){
        Hold_Lender();
    });
    
    
    /* Hold Lender Vs Lender Calculation Click */
    function Hold_Lender(state){
       
       var hold_textbox17 = $("#Hold_Lender1").val().replace(/,/g, ''); /* ( TextBox17 )*/ 
       if( hold_textbox17 == "" ){
            alert( "Please enter values into Your Points before calcualting" );
       }else{
           var Hold_Lender_Origination = parseFloat(((hold_textbox17) / 100) * 100000); 
           $("#hold_lender_org").val( "$"+Math.round( Hold_Lender_Origination) );
           $( "#hold_lender_org" ).digits();
           
           var hold_Refinancing = parseFloat( 0.025 * 100000);
           $("#hold_lender_ref").val( "$"+Math.round( hold_Refinancing) );
           $( "#hold_lender_ref" ).digits();
           
           var Hold_Lender_Total =  parseFloat( Hold_Lender_Origination + hold_Refinancing );
           $("#hold_lender_total").val( "$"+Math.round( Hold_Lender_Total) );
           $( "#hold_lender_total" ).digits();
       }
    }
    
    /* Flip Lender Vs Lender Calculation Click */
    $( '#Flip_Lender_calculate' ).click(function(){
        Flip_Lender();
    });
    
     /* Flip Lender Vs Lender Calculation Function */
    function Flip_Lender(state){
        
        flip_textbox12 = $("#Flip_Lender1").val().replace(/,/g, ''); /* ( TextBox12 )*/
        flip_textbox13 = $("#Flip_Lender2").val().replace(/,/g, ''); /* ( TextBox23 )*/
        
        if( flip_textbox12 == "" || flip_textbox12 == "" ){
            alert( "Please enter values into Your Points and Your Rate before calcualting" );
        }else{
            var Flip_Lender_Origination = parseFloat(((flip_textbox12) / 100) * 100000); 
            $("#flip_lender_org").val( "$"+Math.round( Flip_Lender_Origination) );
            $( "#flip_lender_org" ).digits();
            
            var Flip_Lender_Interest = parseFloat(((flip_textbox13) * (90 / 360) / 100) * 100000);
            $("#flip_lender_interest").val( "$"+Math.round( Flip_Lender_Interest) );
            $( "#flip_lender_interest" ).digits();
            
            
            var Flip_Lender_Total = Math.round( Flip_Lender_Origination + Flip_Lender_Interest );
            $("#flip_lender_total").val( "$"+Flip_Lender_Total  );
            $( "#flip_lender_total" ).digits();
        }
    }
    
    
    /* Flip Cash Vs Leverage Click */
    $( '#flip_calculate' ).click(function(){
        Flip_Cash_Leverage( );
    });

    
    function Flip_Cash_Leverage(state){
        
        console.log( state );
        
        flip_textbox1 = $("#flip_TextBox1").val().replace(/,/g, ''); /* ( TextBox1 )*/
        flip_textbox2 = $("#flip_TextBox2").val().replace(/,/g, ''); /* ( TextBox2 )*/
        flip_textbox3 = $("#flip_TextBox3").val().replace(/,/g, ''); /* ( TextBox3 )*/
      
        
        if( flip_textbox1 == "" || flip_textbox2 == "" || flip_textbox3 == "" ){
            alert( "Please enter values into Purchase Price,Repairs and After Repair Value before calcualting" );
        }else{
            
            /* Flip Cash Vs Leverage Calculation */
            
            /* Cash Result Box ( TextBox4 )*/
            var Cash_Result = parseFloat( (flip_textbox1) ) + parseFloat( (flip_textbox2) ) + parseFloat( (flip_textbox3 * 0.02) ) + parseFloat( (flip_textbox1 * 0.01))+ parseFloat( (flip_textbox1 * 0.02 * (90 / 360)) ) + parseFloat( (flip_textbox1 * 0.01 * (90 / 360)) ) + parseFloat( (375) ) + parseFloat( (675) );
            $_Cash_Result = "$" + Math.round( Cash_Result );
            $( ".flip_cr" ).val( $_Cash_Result.replace( "$-", "-$" ));
            $( ".flip_cr" ).digits();
            
            /* Cash Result Net Profit ( TextBox5 ) */
            var Net_Profit = parseFloat((flip_textbox3)) - parseFloat(( parseFloat( (flip_textbox1) ) + parseFloat( (flip_textbox2) ) + parseFloat( (flip_textbox3 * 0.02) ) + parseFloat( (flip_textbox1 * 0.01) ) + parseFloat( (flip_textbox1 * 0.02 * (90 / 360))) + parseFloat( (flip_textbox1 * 0.01 * (90 / 360)) ) + parseFloat( (375) ) + parseFloat((675))))- parseFloat( (flip_textbox3 * 0.02) ) - parseFloat( (flip_textbox3 * 0.03));
                $_Net_Profit = "$" + Math.round( Net_Profit );
                $( ".flip_np" ).val( $_Net_Profit.replace( "$-", "-$" ));
                $( ".flip_np" ).digits(); 
            
            /* Cash Result Box ROI Percentage ( TextBox6 )*/
            var ROI = parseFloat( Math.round( Net_Profit ) ) / parseFloat( Math.round( Cash_Result ) );
            
            $( ".flip_roi" ).val(  Math.round( ROI * 100 )  + "%" );
            $( ".flip_roi" ).digits();
            
           
            /* Leverage Result Box Cash Result ( TextBox7 ) */
            var Lev_Cash_Result =  parseFloat( flip_textbox1 ) * 0.2 + parseFloat(flip_textbox2)+ (   parseFloat( ( flip_textbox1 * 0.8 * 0.0175 ) + 1100 + 500 + 675 + 375 ) +
                parseFloat( flip_textbox1 * 0.02 * (90 / 360) + parseFloat(flip_textbox1 * 0.01 * (90 / 360)) + parseFloat(flip_textbox1* 0.01) + parseFloat(flip_textbox3 * 0.02) + parseFloat(flip_textbox1 * 0.8 * 0.0825 * (75 / 360)) + parseFloat(flip_textbox1 * 0.8 * 0.0999 * (15 / 360))));   
               $_Lev_Cash_Result = "$" + Math.round( Lev_Cash_Result ); 
               $( "#flip_lev_cr" ).val( $_Lev_Cash_Result.replace( "$-", "-$" )); 
               $( "#flip_lev_cr" ).digits();
            
            /* Leverage Result Box Net Profit ( TextBox8 )*/
            var Lev_Net_Profit = parseFloat((flip_textbox3) - Lev_Cash_Result ).toFixed(4) - parseFloat(flip_textbox1 * 0.8).toFixed(4) - parseFloat(flip_textbox1 * 0.8 * 0.01).toFixed(4) - parseFloat( flip_textbox3 * 0.02 ).toFixed(4) - 
            parseFloat( flip_textbox3 * 0.03 ).toFixed(4) ;
                $_Lev_Net_Profit = "$"+ Math.round( Lev_Net_Profit );
                $( "#flip_lev_np").val( $_Lev_Net_Profit.replace( "$-", "-$"   ));
                $( "#flip_lev_np" ).digits();
            
            /* Leverage Result Box ROI Percentage ( TextBox9 ) */
            var Lev_ROI = parseFloat(  Lev_Net_Profit  ) / parseFloat(  Lev_Cash_Result  );
            $( "#flip_lev_roi" ).val(  Math.round( Lev_ROI * 100 )  + "%" );
            $( "#flip_lev_roi" ).digits();
            
           /* Power of Laverage Cash Invested Value (TextBox10) */
            var PL_Cash_Invested = Math.round( Lev_Cash_Result * 2 );
            $_PL_Cash_Invested = "$"+Math.round( PL_Cash_Invested ); 
            $( "#PL_Cash_Invested" ).val( $_PL_Cash_Invested.replace( "$-", "-$" ) ); 
            $( "#PL_Cash_Invested" ).digits();
                    
            /* Power of Laverage Cash Invested Value (TextBox11) */
            var PL_2X_Profit = Math.round( Lev_Net_Profit * 2 );
            $_PL_2X_Profit = "$" + PL_2X_Profit;
            $( "#PL_2X_Profit" ).val( $_PL_2X_Profit.replace( "$-", "-$" ) );
            $( "#PL_2X_Profit" ).digits(); 
            
        }
            
    }
    
    $('input.number_textbox').keyup(function (event) {
    // skip for arrow keys
        if (event.which >= 37 && event.which <= 40) {
            event.preventDefault();
        }
    
        var currentVal = $(this).val();
        var testDecimal = testDecimals(currentVal);
        if (testDecimal.length > 1) {
            console.log("You cannot enter more than one decimal point");
            currentVal = currentVal.slice(0, -1);
        }
        $(this).val(replaceCommas(currentVal));

    });
    
    function testDecimals(currentVal) {
        var count;
        currentVal.match(/\./g) === null ? count = 0 : count = currentVal.match(/\./g);
        return count;
    }
    
    function replaceCommas(yourNumber) {
        var components = yourNumber.toString().split(".");
        if (components.length === 1) 
            components[0] = yourNumber;
        components[0] = components[0].replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (components.length === 2)
            components[1] = components[1].replace(/\D/g, "");
        return components.join(".");
    }
     
});