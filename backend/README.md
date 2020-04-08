# APIs for Backend 

## For Products Addition and Show
### Addition of Product
End Point GET

`/product/add`

Required
```
{
  token: token,
  name: name,
  price: price,
  detail: detail
}
```
`token: code attached with the product`

### Show all Products
End Point GET 

`/product/all`

Required

`Nothing`

Return 
`JSON data of All products`

### Show all Products
End Point GET 

`/product/:token`

`token: code attached with the product`

Required

`Nothing`

Return 

`JSON data of the products`

## For User Login and Register
### Register
End Point GET

`/users/register`

Required
```
{
  username: username,
  email: email,
  password: password,
  number: number
}
```

The User will be registered in database with this end point. User will be assigned a random access token.

### Login
End Point GET

`/users/login`

Required
```
{
  email: email,
  password: password
}
```
Return JSON

```
{
  accessToken: accessToken
}
```

The access point returned will be used to access authenticated routes.

## For User Cart
### Addition of Product
End Point GET

`/cart/utoken/product/add/ptoken`

Require
`utoken: Access token assigned to a user.`

`ptoken: code attached with the product`

### Removal of Product
End Point GET

`/cart/utoken/product/remove/ptoken`

Require

`utoken: Access token assigned to a user.`

`ptoken: code attached with the product`

### All Products in Cart
End Point GET 

`/cart/utoken/all`

Require 

`utoken: Access token assigned to a user`

Return

`JSON data of all products in the cart`

### Checkout
End Point GET

`/cart/utoken/checkout`

Require 

`utoken: Access token assigned to a user`

Return 

```
{ 
 price: total_price,
  prouduct: Array_of_Products_in_cart
}
`
