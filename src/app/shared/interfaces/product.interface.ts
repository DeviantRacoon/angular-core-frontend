import { ImageProductInterface } from "./image.product.interface"

export interface ProductInterface {
    id: number
    title: string
    body_html: string
    vendor: string
    product_type: string
    created_at: string
    handle: string
    updated_at: string
    published_at: string
    template_suffix: any
    published_scope: string
    tags: string
    status: string
    admin_graphql_api_id: string
    images: ImageProductInterface[]
    image: ImageProductInterface
}

