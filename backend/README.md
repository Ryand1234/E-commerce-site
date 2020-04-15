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

### Find a Products
End Point GET 

`/product/search/:token`

`token: product name`

Required

`Nothing`

Return 

`JSON data of the product`

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
  number: number,
  gender: gender,
  dob: dob
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
  msg: logout successfull
}
```

The access point will be saved in session and will be used to access authenticated routes.

### Logout
End Point 

`/user/logout`

Required 

`Nothing`

Return

```
{
  msg: Logout Successfull
}
```


## For User Cart
### Addition of Product
End Point GET

`/cart/add/ptoken`

Require

`ptoken: code attached with the product`

### Removal of Product
End Point GET

`/cart/remove/ptoken`

Require

`ptoken: code attached with the product`

### All Products in Cart
End Point GET 

`/cart/all`

Require 

`Nothing`

Return

`JSON data of all products in the cart`

### Checkout
End Point GET

`/cart/checkout`

Require 

`Nothing`

Return 

```
{ 
 price: total_price,
  prouduct: Array_of_Products_in_cart
}
`
