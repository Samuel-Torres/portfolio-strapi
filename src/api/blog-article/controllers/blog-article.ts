/**
 * blog-article controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog-article.blog-article', 
    ({ strapi }) => ({
        async findOne(ctx) {
            const { id } = ctx.params;
            console.log("ID: ", id)
            const entity = await strapi.db.query('api::blog-article.blog-article').findOne({
                where: {slug: id}
            })

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx)

            return this.transformResponse(sanitizedEntity)
        }
    })    
);
