import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import uniqueValidator from 'mongoose-unique-validator'

mongoose.plugin(uniqueValidator)

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: 'User email "{VALUE}" already exist',
    lowercase: true,
    required: 'Email is required'
  },
  password: {
    type: String,
    required: 'Password is required'
  },
  firstName: {
    type: String,
    lowercase: true,
    required: 'First name is required'
  },
  lastName: {
    type: String,
    lowercase: true,
    required: 'Last name is required'
  }
},
{
  timestamps: true
})

userSchema.pre('save', function(next) {
  if(!this.isModified('password')) {
    return next()
  }

  const solt = bcrypt.genSaltSync(10)
  this.password = bcrypt.hashSync(this.password, solt)
  next()
})

userSchema.statics.createFields = ['email', 'password', 'firstName', 'lastName']

userSchema.statics.findOneWithPablicFields = function(params, cb) {
  return this.findOne(params, cb).select({ password: 0, _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
}

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

export default mongoose.model('User', userSchema)
