import * as React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AspectRatio } from '../../components';
import { Product, ProductImage } from '../../types/Product';
import { Header, Text } from '../../typography';
import styles from './product-details.module.scss';

type LocationState = {
  product: Product | null;
};

const ProductDetails = () => {
  const state = useLocation().state;
  const { product } = state ? (state as LocationState) : { product: null };
  const [selectedImage, setSelectedImage] = React.useState<ProductImage | null>(
    product?.image ?? null
  );

  const showImage = (id: number): void => {
    const image = product!.images.find((image) => image.id === id);
    if (!image) {
      return;
    }
    setSelectedImage(image);
  };

  if (!product) {
    return (
      <div>
        Not founded product here
        <Link className={styles.link} to='/'>
          Go to product page
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.product}>
      <section className={styles.product__showcase_wrapper}>
        <AspectRatio
          src={selectedImage?.src ?? 'https://via.placeholder.com/800'}
          alt={selectedImage?.alt ?? ''}
          ratio={'1-1'}
        />
        {product.images.length > 1 && (
          <div className={styles.product__images_wrapper}>
            {product.images.map((image) => (
              <AspectRatio
                key={image.id}
                src={image.src}
                alt={image.alt ?? ''}
                ratio='4-1'
                onClick={() => showImage(image.id)}
              />
            ))}
          </div>
        )}
      </section>
      <section>
        <div className={styles.product__info}>
          <Header as='h2' size='xl' variant='dark'>
            {product.title}
          </Header>
          <Text>{product.vendor}</Text>
          <Text size='xl' variant='primary'>
            $ {product.variants[0].price}
          </Text>
        </div>
        <div className={styles.product__about}>
          <Header as='h3' size='lg' variant='dark'>
            About Producut
          </Header>
          <div
            className={styles.product__body}
            dangerouslySetInnerHTML={{ __html: product.body_html }}
          />
        </div>
        <Link to='/' className={styles.link}>
          Go Back
        </Link>
      </section>
    </div>
  );
};

export default ProductDetails;
