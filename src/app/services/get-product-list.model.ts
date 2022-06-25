export class GetProductsListResponse {
    flowStatus: 'SUCCESS' | 'FAILURE';
    results: GetProductsListResults;
    constructor(flowStatus: 'SUCCESS' | 'FAILURE', apiResponse) {
        this.flowStatus = flowStatus;
        this.results = {
            products: [],
            totalProducts: 0
        };
        if (apiResponse && apiResponse.products && Array.isArray(apiResponse.products)) {
            apiResponse.products.forEach(element => {
                this.results.products.push(new GetProductList(element));
            });
        }
        if (apiResponse && apiResponse.paging && apiResponse.paging.total_item) {
            this.results.totalProducts = apiResponse.paging.total_item;
        }
    }
}
export interface GetProductsListResults {
    products: GetProductList[];
    totalProducts: number;
}

export class GetProductList {
    id: string;
    status: string;
    name: string;
    priceDisplay: string;
    discount: number;
    strikeThroughPriceDisplay: string;
    categoryName: string;
    brand: string;
    reviewRating: number;
    reviewCount: number;
    itemCount: number;
    images: string[];
    merchantName: string;
    merchantLocation: string;
    uniqueSellingPoint: string;
    merchantBadgeUrl: string;
    official: boolean;

    constructor(product) {
        this.id = product ? product.id : '';
        this.status = product ? product.status : '';
        this.name = product ? product.name : '';
        this.priceDisplay = product && product.price && product.price.priceDisplay ? product.price.priceDisplay : '';
        this.discount = product && product.price ? product.price.discount : '';
        this.strikeThroughPriceDisplay = product && product.price && product.price.strikeThroughPriceDisplay ?
            product.price.strikeThroughPriceDisplay : '';
        this.categoryName = product && product.rootCategory ? product.rootCategory.name : '';
        this.brand = product ? product.brand : '';
        this.reviewRating = product && product.review ? product.review.rating : '';
        this.reviewCount = product && product.review ? product.review.count : '';
        this.itemCount = product ? product.itemCount : '';
        this.images = product ? product.images : '';
        this.merchantName = product ? product.merchantName : '';
        this.merchantLocation = product ? product.location : '';
        this.uniqueSellingPoint = product ? product.uniqueSellingPoint : '';
        this.merchantBadgeUrl = product && product.badge ? product.badge.merchantBadgeUrl : '';
        this.official = product && product.official ? product.official : false;
    }

    parsePriceValue(price: string): string {
        if (price && price.length > 0) {
            const splittedPrice: string[] = price.split('Rp');
            if (splittedPrice.length > 0 && splittedPrice[1]) {
                const splittedPriceWithDecimals: string[] = splittedPrice[1].split('.');
                const filteredPricSplits: string[] = splittedPriceWithDecimals.filter(each => {
                    const valid: boolean = /0{3}/.test(each);
                    if (!valid) {
                        return each;
                    }
                    return;
                });
                return filteredPricSplits && filteredPricSplits.length > 0 ? filteredPricSplits.join(',') : '';
            }
            return '';
        }
        return '';
    }
}
export interface GetProductListPayload {
    searchTerm: string;
    start: string; // paginaion number
    itemPerPage: string;
}
