import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('api')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/create')
  async createPost(
    @Res() res: any,
    @Body() createProductDTO: CreateProductDTO,
  ) {
    const product = await this.productService.createProduct(createProductDTO);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Product Successfully', product });
  }
  @Get('/')
  async getProducts(@Res() res: any) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json({ products });
  }
  @Get('/:productID')
  async getProductById(@Res() res: any, @Param('productID') productID: string) {
    const product = await this.productService.getProduct(productID);
    if (!product) throw new NotFoundException('Product Does not exists');
    return res.status(HttpStatus.OK).json({ product });
  }

  @Delete('/delete')
  async deleteProductById(@Res() res: any, @Query('productID') productID) {
    const productDeleted = await this.productService.deleteProduct(productID);
    if (!productDeleted) throw new NotFoundException('Product Does not exists');
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Product Deleted', productDeleted });
  }

  @Put('/:productID')
  async updateProductById(@Res() res: any, @Param('productID') productID: string, @Body() createProductDTO: CreateProductDTO) {
    const updatedProduct = await this.productService.updateProduct(productID, createProductDTO);
    if (!updatedProduct) throw new NotFoundException('Product Does not exists');
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Product updated correctly', updatedProduct });
  }
}
