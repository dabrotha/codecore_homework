
class Ability
  include CanCan::Ability
  # The `cancancan` requires that you written a `current_user`
  # method that returns the signed-in user.
  #
  #                     All methods to test permissions will have
  #               👇--- `user` as `current_user`
  def initialize(user)
    # Define abilities for the passed in user here. For example:
    #
    
    user ||= User.new # guest user (not logged in)
    
    if user.admin?
      can :manage, :all
    else
      can :read, :all
    end


    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities
    
    # When defining permission with the `can` method inside
    # of the ability file, the arguments are:
    # - The first is a symbol that represents the action
    #   we're verifying permission for.
    #   (e.g. :create, :edit, :delete, like, :etc.)
    # - The second argument is the class of the objects
    #   we'll verifying permission with which are usually models.
    #   (e.g. Question, Answer, User, etc)
    # - The last is a block that must return a boolean. If true,
    #   the user has permission to perform the action the instance
    #   of the given class.



    can(:manage, Post) do |post|
      # |question| is the instance of the Question
      # Here we compare the `current_user` to the
      # the owner of the question. If they're the same,
      # the `current_user` is allowed to :manage the question.
      user == post.user
    end

    can(:manage, Comment) do |comment|
      user == comment.user
    end
    
    can(:manage, User) do |u|
      user == u
    end
  
  end

  #   # Inside this file, Ability.rb, we define permission rules
  #   # with the `can` method.
    
  #   # Outside of this file, we use a completely different method
  #   # named `can?` to test the permission defined in this file.
  #   # (e.g. can the user "Jon" delete that answer -> can?(:delete, ))
  # end

end
