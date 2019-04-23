const message = require('../../core/message');
const Group = require('../groupModel');

const groupGetAll = (req, res) => {
  const {userId} = req.body;

  Group.find()
    .sort({createdAt: -1})
    .select('-__v')
    .exec()
    .then(docs => {
      res
        .status(200)
        .json(message.success('Groups are showed', filterGroups(docs, userId)));
    })
    .catch(err => {
      res.status(500).json(message.fail('Group get all error', err.message));
    });
};

module.exports = groupGetAll;

function filterGroups(groups, userId) {
  return groups.filter(el => {
    if (el.accessType === 'members')
      return el.members.some(member => member._id.toString() === userId);
    return true;
  });
}
