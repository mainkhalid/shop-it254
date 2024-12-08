import { useContext } from 'react';
import { ShopContext } from '../ShopContext';
import { assets } from '../assets/assets';


const CartItem = () => {
  const { all_products, cartItems, removeFromCart } = useContext(ShopContext);

  // Check if the cart is empty
  const isCartEmpty = Object.values(cartItems).every((quantity) => quantity === 0);

  // Calculate the total price of all items in the cart
  const totalPrice = all_products.reduce((total, product) => {
    if (cartItems[product.id] > 0) {
      return total + product.new_price * cartItems[product.id];
    }
    return total;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Your Cart</h2>
        <p className="text-sm text-gray-500">
          {Object.values(cartItems).reduce((a, b) => a + b, 0)} items
        </p>
      </div>

      {/* Empty Cart Message */}
      {isCartEmpty ? (
        <div className="text-center text-gray-500 py-6">
          <p className="text-lg font-semibold">Your cart is empty!</p>
          <p className="mt-2 text-sm">Start adding products to see them here.</p>
          
        </div>
      ) : (
        /* Cart Items */
        <div className="space-y-6">
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div
                  key={e.id}
                  className="flex items-center gap-6 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  {/* Product Image */}
                  <img
                    className="w-20 h-20 object-cover rounded-md border border-gray-200"
                    src={e.image}
                    alt={e.name}
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{e.name}</p>
                    <p className="text-sm text-gray-500">Unit Price: ${e.new_price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded">
                      Qty: {cartItems[e.id]}
                    </p>
                  </div>

                  {/* Total Price */}
                  <div className="text-lg font-bold text-gray-800">
                    ksh{e.new_price * cartItems[e.id]}
                  </div>

                  {/* Remove Button */}
                  <img
                    className="w-6 h-6 cursor-pointer hover:opacity-70 transition"
                    onClick={() => removeFromCart(e.id)}
                    src={assets.remove_icon}
                    alt="Remove"
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      )}

      {/* Cart Total */}
      {!isCartEmpty && (
        <div className="mt-6 border-t pt-4 text-right">
          <p className="text-xl font-semibold text-gray-800">Total: ksh{totalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default CartItem;
