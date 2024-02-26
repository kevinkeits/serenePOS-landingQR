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

        $('#filterInput').on('input', function() {
            var inputValue = $(this).val().toLowerCase();
            $('.productMenu').filter(function() {
                $('.categoryMenu').hide();
                $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1); // Sembunyikan atau tampilkan item berdasarkan kesesuaian teks input
              });
        });

    // COSTUMIZE ORDER
        // Mengambil nilai perubahan 
        $('input.CozOrder').change(function() {
            var totalOrder = 0;
            var value = parseInt($('#qtyInput').val());
            var itemPrice = parseInt($('#itemPrice').text());
            
              $('input.CozOrder:checked').each(function() {
                totalOrder +=parseInt($(this).val());
                });

             var grandTotalPrice = (value * itemPrice) + (totalOrder * value);
             $('#totalValue').text(`Add To Cart - Rp. ` + grandTotalPrice);
         });

         // Increment Qty
        $('#incrementQty').on('click', function() {
            // Mendapatkan nilai dari input
            var value = parseInt($('#qtyInput').val());
            var itemPrice = parseInt($('#itemPrice').text());
            var totalOrder = 0;
            // Mengambil nilai dari kelas Input
            $('input.CozOrder:checked').each(function() {
                totalOrder +=parseInt($(this).val());
            });
            var incrementVal = value + 1;
            var totalPrice = incrementVal * (itemPrice + totalOrder);
                // Menambahkan 1 ke nilai input
                $('#qtyInput').val(incrementVal); 
                $('#totalValue').text(`Add To Cart - Rp. ` + totalPrice.toLocaleString());  
        });

        // Decrement Qty
        $('#decrementQty').on('click', function() {
            // Mendapatkan nilai dari input
            var value = parseInt($('#qtyInput').val());
            // Mendapatkan nilai harga item
            var itemPrice = parseInt($('#itemPrice').text());
            var totalOrder = 0;
            // Mengambil nilai dari kelas Input
            $('input.CozOrder:checked').each(function() {
                totalOrder +=parseInt($(this).val());
            });

            // Mendapatkan nilai total harga item
            var decrementVal = value - 1;
            var totalPrice = decrementVal * (itemPrice + totalOrder);
            if (value > 1) {
                // Mengurangi 1 dari nilai input
                $('#qtyInput').val(decrementVal);
                $('#totalValue').text(`Add To Cart - Rp. ` + totalPrice.toLocaleString());
            }
        });

    // CART ORDER
        // Product 1 
            function countTotalCart() {
                var priceP1 = parseInt($('#PriceP1').text()) || 0;
                var PriceP2 = parseInt($('#PriceP2').text()) || 0;
                var QtyP1 = parseInt($('#quantityInputOp1').val()) || 1;
                var QtyP2 = parseInt($('#quantityInputOp2').val()) || 1;
                var totalpriceP1 = priceP1 * QtyP1;
                var totalpriceP2 = PriceP2 * QtyP2;
                var totalCartOrder = totalpriceP1 + totalpriceP2;
                $('#TotalCart').text(totalCartOrder.toLocaleString());
            }

            countTotalCart();
            
            $('#PriceP1, #PriceP2, #quantityInputOp1, #quantityInputOp2').on('input', function() {
                countTotalCart(); // Memanggil fungsi hitungTotalCartOrder setiap kali terjadi perubahan
            });
           

            // Increment Qty
            $('#incrementButtonOp1').on('click', function() {
                // Mendapatkan nilai dari input
                var value = parseInt($('#quantityInputOp1').val());
                var incrementVal = value + 1;
                // Menambahkan 1 ke nilai input
                $('#quantityInputOp1').val(incrementVal);
                countTotalCart();
            });

            // Decrement Qty
            $('#decrementButtonOp1').on('click', function() {
                // Mendapatkan nilai dari input
                var value = parseInt($('#quantityInputOp1').val());
                var decrementVal = value - 1;
                // Memastikan nilai tidak negatif
                if (value > 1) {
                    // Mengurangi 1 dari nilai input
                    $('#quantityInputOp1').val(decrementVal);
                }
                // Menghapus produk jika jumlahnya kurang dari 1
                else {
                    $('#product1').remove();
                }
                countTotalCart();
            });

        // Product 2
            // Increment Qty
            $('#incrementButtonOp2').on('click', function() {
                // Mendapatkan nilai dari input
                var value = parseInt($('#quantityInputOp2').val());
                // Menambahkan 1 ke nilai input
                $('#quantityInputOp2').val(value + 1);
                countTotalCart();
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
                countTotalCart();
            });
        
});