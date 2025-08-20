package com.ecommerce.backend.admin;

import com.ecommerce.backend.Product.Product;
import com.ecommerce.backend.Product.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/products")
public class AdminProductController {

    private final ProductRepository productRepository;

    public AdminProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        Product product = productRepository.findById(id).orElseThrow();
        product.setName(updatedProduct.getName());
        product.setPrice(updatedProduct.getPrice());
        product.setDescription(updatedProduct.getDescription());
        return productRepository.save(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
