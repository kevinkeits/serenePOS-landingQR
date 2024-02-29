$(function() {

    // INDEX.HTML

        // Get Table Name

        function getTableName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        var tableValue = getTableName('table');

        // Mengupdate teks dalam elemen <h1> dengan nilai dari parameter 'table'
        if (tableValue) {
            $('#tableName').text('Table ' + tableValue);
        } else {
            $('#tableName').text('Page Title'); // Jika parameter 'table' tidak ditemukan, kembalikan teks awal
        }

        
    // Filter Input
        $('#filterInput').on('input', function() {
            var inputValue = $(this).val().toLowerCase();
            $('.productMenu').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1); // Sembunyikan atau tampilkan item berdasarkan kesesuaian teks input
              });
              if (inputValue === '') {
                $('.categoryMenu').removeClass('hidden'); // Tampilkan kembali semua kategori jika input kosong
                } else {
                    $('.categoryMenu').addClass('hidden'); // Sembunyikan semua kategori jika input tidak kosong
                }
        });

        // Count Modal total Order
        function countCuzOrder(){
            var itemPrice = parseInt($('#itemPrice').text());
            var value = parseInt($('#qtyInput').val());
            TotalCuzPrice = itemPrice * value;
            $('#totalValue').text(`Add To Cart - Rp. ` + TotalCuzPrice.toLocaleString());
        };

        countCuzOrder();

        // Modal Custom Order
        // Buka modal saat tombol "Open Modal" diklik
        $('.OpenCustomOrder').on('click', function() {
            $('#modalCustomOrder').removeClass('hidden');
            $('.mainPage').addClass('hidden');
        });

        // Tutup modal saat tombol close atau overlay diklik
        $('#CloseCustomOrder').on('click', function() {
            $('.mainPage').removeClass('hidden');
            $('#modalCustomOrder').addClass('hidden');
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

    // Modal CART ORDER
        // Product 1 
            $('#totalValue').on('click', function() {
                $('.cartOrder').removeClass('hidden');
                $('#modalCustomOrder').addClass('hidden');
            });

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

            // Modal Custom Order
            // Buka modal saat tombol "Open Modal" diklik
            $('.addNotes').on('click', function() {
                $('.modalAddNotes').removeClass('hidden');
               
            });

            // Tutup modal saat tombol save diklik
            $('.saveNotes').on('click', function() {
                $('.modalAddNotes').addClass('hidden');
            });

            // Tutup modal saat tombol cancel diklik
            $('.cancelNotes').on('click', function() {
                $('.modalAddNotes').addClass('hidden');
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