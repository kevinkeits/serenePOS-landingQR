$(function() {

    // INDEX.HTML
        $('#incrementBtn').on('click', function() {
            // Mendapatkan nilai dari input
            var value = parseInt($('#counterInput').val());
            // Menambahkan 1 ke nilai input
            $('#counterInput').val(value + 1);
        });

        $('#decrementBtn').on('click', function() {
            // Mendapatkan nilai dari input
            var value = parseInt($('#counterInput').val());
            // Memastikan nilai tidak negatif
            if (value > 0) {
                // Mengurangi 1 dari nilai input
                $('#counterInput').val(value - 1);
            }
        });

    // COSTUMIZE ORDER
        //
        $('input[name="serve"], input[name="sugar"], input[name="addOn"]').change(function() {
            var total = 0;
            var value = parseInt($('#qtyInput').val());
            var itemPrice = parseInt($('#itemPrice').text());

            $('input[name="addOn"]:checked').each(function() {
                result += parseInt($(this).val());
            });

            var selectedOp1 = $('input[name="serve"]:checked').val();
            if (selectedOp1) {
                total += parseInt(selectedOp1);
             }
            var selectedOpVal1 = parseInt(selectedOp1);

             var selectedOp2 = $('input[name="sugar"]:checked').val();
             if (selectedOp2) {
                 total += parseInt(selectedOp2);
              }
              var selectedOpVal2 = parseInt(selectedOp2);
            

             var grandTotalPrice = (value * itemPrice) + selectedOpVal1 + selectedOpVal2;
             $('#totalValue').text('Hasil penjumlahan: ' + grandTotalPrice);
         });

         // Increment Qty
        $('#incrementQty').on('click', function() {
            // Mendapatkan nilai dari input
            var value = parseInt($('#qtyInput').val());
            // Menambahkan 1 ke nilai input
            $('#qtyInput').val(value + 1);      
        });

        /*

        // Variant 1 - Radio Button
        $('input[name="serve"]').on('click', function() {
            var selectedOp = $("input[name='serve']:checked").val();
            var selectedOpVal = parseInt(selectedOp);
            var value = parseInt($('#qtyInput').val());
            var itemPrice = parseInt($('#itemPrice').text());
            var grandTotalPrice = (value * itemPrice) + selectedOpVal;
            $('#totalValue').text(`Add To Cart - Rp. ` + grandTotalPrice);
        });

        // Variant 2 - Radio Button
        $('input[name="sugar"]').on('click', function() {
            var selectedOp = $("input[name='sugar']:checked").attr('value');
            var selectedOpVal = parseInt(selectedOp);
            var value = parseInt($('#qtyInput').val());
            var itemPrice = parseInt($('#itemPrice').text());
            var grandTotalPrice = (value * itemPrice) + selectedOpVal;
            $('#totalValue').text(`Add To Cart - Rp. ` + grandTotalPrice);
        });

        // Variant 3 - Check Box
        $('input[name="addOn"]').change(function() {
            var result = 0;
            var value = parseInt($('#qtyInput').val());
            var itemPrice = parseInt($('#itemPrice').text());
            $('input[name="addOn"]:checked').each(function() {
                result += parseInt($(this).val());
            });
            var grandTotalPrice = (value * itemPrice) + result;
            $('#totalValue').text(`Add To Cart - Rp. ` + grandTotalPrice);
        });

        // Increment Qty
        $('#incrementQty').on('click', function() {
            // Mendapatkan nilai dari input
            var value = parseInt($('#qtyInput').val());
            // Menambahkan 1 ke nilai input
            $('#qtyInput').val(value + 1);      
        });
 */
        // Decrement Qty
        $('#decrementQty').on('click', function() {
            // Mendapatkan nilai dari input
            var value = parseInt($('#qtyInput').val());
            // Mendapatkan nilai harga item
            var itemPrice = parseInt($('#itemPrice').text());
            // Mendapatkan nilai total harga item
            var totalPrice = (value - 1) * itemPrice;
            // Memastikan nilai tidak negatif
            if (value > 1) {
                // Mengurangi 1 dari nilai input
                $('#qtyInput').val(value - 1);
                $('#totalValue').text(`Add To Cart - Rp. ` + totalPrice);
            }
            
        });
   

    // CART ORDER
        // Product 1 
            // Increment Qty
            $('#incrementButtonOp1').on('click', function() {
                // Mendapatkan nilai dari input
                var value = parseInt($('#quantityInputOp1').val());
                // Menambahkan 1 ke nilai input
                $('#quantityInputOp1').val(value + 1);
            });

            // Decrement Qty
            $('#decrementButtonOp1').on('click', function() {
                // Mendapatkan nilai dari input
                var value = parseInt($('#quantityInputOp1').val());
                // Memastikan nilai tidak negatif
                if (value > 1) {
                    // Mengurangi 1 dari nilai input
                    $('#quantityInputOp1').val(value - 1);
                }
                // Menghapus produk jika jumlahnya kurang dari 1
                else {
                    $('#product1').remove();
                }
            });

        // Product 2
            // Increment Qty
            $('#incrementButtonOp2').on('click', function() {
                // Mendapatkan nilai dari input
                var value = parseInt($('#quantityInputOp2').val());
                // Menambahkan 1 ke nilai input
                $('#quantityInputOp2').val(value + 1);
            });

            // Decrement Qty
            $('#decrementButtonOp2').on('click', function() {
                // Mendapatkan nilai dari input
                var value = parseInt($('#quantityInputOp2').val());
                // Memastikan nilai tidak negatif
                if (value > 1) {
                    // Mengurangi 1 dari nilai input
                    $('#quantityInputOp2').val(value - 1);
                }
                // Menghapus produk jika jumlahnya kurang dari 1
                else {
                    $('#product2').remove();
                }
            });
        
});