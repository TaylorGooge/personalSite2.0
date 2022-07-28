'use strict';

/**
 *  comment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment.comment', ({strapi}) => ({
    // // this method is called when api to create comment is called
    // async create(ctx) {
    //     // add user from the request and add it to the body of request
    //     ctx.request.body.user = ctx.state.user.id;
    //     // call the function to creating comment with data
    //     let entity = await strapi.services.comment.create(ctx.request.body);
    //     // return data for api after removing field which are not exported
    //     return sanitizeEntity(entity, { model: strapi.models.comment });
    // },
    // async update(ctx) {
    //     // get the id of comment which is updated
    //     const { id } = ctx.params;
    //     // finding the comment for user and id
    //     const [comment] = await strapi.services.comment.find({
    //         id: ctx.params.id,
    //         'user.id': ctx.state.user.id,
    //     });
    //     // comment does not exist send error
    //     if (!comment) {
    //         return ctx.unauthorized(`You can't update this entry`);
    //     }
    //     // update the comment
    //     let entity = await strapi.services.comment.update({ id }, ctx.request.body);
    //      // return data for api after removing field which are not exported
    //     return sanitizeEntity(entity, { model: strapi.models.comment });
    // },
    // async delete(ctx) {
    //     // get the id of comment which is updated
    //     const { id } = ctx.params;
    //     // finding the comment for user and id
    //     const [comment] = await strapi.services.comment.find({
    //         id: ctx.params.id,
    //         'user.id': ctx.state.user.id,
    //     });
    //     // comment does not exist send error
    //     if (!comment) {
    //         return ctx.unauthorized(`You can't update this entry`);
    //     }
    //     // delete the comment
    //     let entity = await strapi.services.comment.delete({ id });
    //      // return data for api after removing field which are not exported
    //     return sanitizeEntity(entity, { model: strapi.models.comment });
    // },
  }));
