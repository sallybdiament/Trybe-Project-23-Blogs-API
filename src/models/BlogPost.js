module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      underscored: true,
      tableName: 'blog_posts',
      createdAt: 'published',
      updatedAt: 'updated',
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: 'id',
        as: 'users'
      })
    };

    return BlogPost;
  };