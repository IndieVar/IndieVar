require 'faker'

if Quote.count == 0
  10.times do
    en = Faker::Quote.matz
    ru = Faker::Quote.matz
    Quote.create(en: en, ru: ru)
  end
end

if Post.count == 0
  10.times do
    data = {title: Faker::Book.title,
            category: Faker::Book.genre,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin sit amet lectus id tempus. Proin feugiat ligula at felis congue volutpat. Maecenas eget facilisis risus. Praesent efficitur ultrices ante. Donec bibendum rutrum sollicitudin. Quisque imperdiet augue sed auctor dictum. Duis quis tincidunt lorem, eu consequat ex.

Proin egestas orci id sapien sollicitudin venenatis. Proin diam urna, laoreet vitae facilisis nec, ultrices vel purus. Sed euismod neque et purus maximus consectetur at in justo. Curabitur dignissim purus nisl, a ultricies magna maximus quis. Etiam bibendum maximus tellus nec venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dignissim aliquam leo, nec dignissim dolor blandit facilisis. Nunc sodales congue viverra.

In aliquam felis convallis felis sollicitudin, id tristique leo congue. Curabitur non faucibus urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus dolor nulla, gravida sit amet tristique vestibulum, fermentum fringilla erat. Quisque sit amet nisi ac mi lobortis imperdiet. In elementum ultrices diam, vitae iaculis justo luctus eu. Sed ut sem nec eros sagittis dapibus vel eu augue. Fusce dignissim lectus eu lacus gravida, in congue arcu tempus.

Sed luctus neque et dui vestibulum, nec lobortis velit ultrices. Proin eget ipsum vitae metus tempus efficitur. Vestibulum vel urna a ligula bibendum lobortis at sed metus. Donec et interdum elit. Pellentesque sollicitudin sit amet lectus faucibus ultricies. Aliquam erat volutpat. Aenean erat justo, blandit eu ex imperdiet, luctus aliquam ante. Sed luctus dolor sit amet pulvinar posuere.

Fusce semper vitae enim vitae tincidunt. Pellentesque tincidunt aliquam orci, congue commodo sapien finibus eu. Proin tempus molestie libero, vitae consequat ante. Sed semper interdum massa eget luctus. Pellentesque a venenatis lorem, a scelerisque mi. Donec venenatis nulla sed nunc sollicitudin tempor. Curabitur mi neque, bibendum a nunc sed, tristique vulputate est. Nunc ut est ac metus ornare placerat. Quisque eu lectus a purus efficitur venenatis. Nam sagittis sit amet mauris eget luctus. Sed posuere magna lacus, in suscipit urna pretium sit amet. Phasellus justo orci, placerat id efficitur non, convallis sed nibh. Suspendisse placerat quis erat eu sodales. Duis et magna sit amet velit pretium consectetur vitae id justo.

Praesent maximus porta ex eu accumsan. Morbi blandit nibh et aliquet mollis. Sed vel porta turpis, id finibus orci. Curabitur in nibh diam. Pellentesque pulvinar eleifend odio et sodales. Duis vulputate ullamcorper sem sit amet pulvinar. Etiam congue pellentesque semper. Cras ac lacus ante. Sed mauris ipsum, sodales ut tincidunt et, varius eu arcu. Etiam pellentesque egestas nulla, a gravida justo malesuada non. Fusce venenatis efficitur lacus, in maximus mi gravida ut. Aliquam consectetur egestas vestibulum. Etiam vulputate pharetra mollis.

Curabitur placerat lorem at lacus ullamcorper, quis sodales lorem posuere. Cras erat felis, rhoncus ac odio et, accumsan ornare dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent elementum quam in neque consequat consectetur. Nam non sem porta, tincidunt nisl quis, faucibus libero. Praesent vel ullamcorper ante. Etiam vel odio semper augue pulvinar ornare aliquam ac sapien. Nulla ut efficitur eros.

Maecenas in placerat urna. Suspendisse potenti. Aliquam bibendum pretium laoreet. Vivamus at ultricies sem. Nunc in mollis magna. Suspendisse sit amet malesuada mi, quis convallis lacus. Cras ullamcorper mi lorem, non lacinia turpis feugiat egestas. Sed eget varius dolor, a pellentesque arcu. Ut id sapien sed lacus sodales mattis eget ac leo. Duis mauris libero, condimentum a elementum sit amet, ullamcorper vitae libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum accumsan lacinia odio nec dignissim. Morbi euismod mi id ante tincidunt, ut aliquet urna porttitor.

Vestibulum nec consequat felis. Maecenas sed pretium augue. Nunc blandit mauris a felis laoreet hendrerit. Mauris purus ex, sollicitudin id cursus id, vestibulum sed ex. Nunc pellentesque ante nibh, in porta felis lobortis sit amet. Etiam sodales tempor ultrices. Nam sit amet arcu fringilla, finibus lectus ut, porta arcu. Quisque porta gravida aliquam. Donec gravida porttitor massa, at sagittis nibh posuere quis. Suspendisse potenti. Cras mi nisl, lacinia vel urna vitae, ullamcorper rutrum ipsum.

Mauris condimentum velit et turpis pharetra pharetra. Etiam sit amet dolor rutrum, consectetur risus at, commodo tellus. In sit amet maximus leo. Maecenas ac lorem pharetra, sollicitudin ante sed, cursus mauris. Morbi tristique lacus ac quam congue tempor. In hac habitasse platea dictumst. Maecenas id efficitur nulla, sed dictum turpis. Nunc ac tincidunt magna. Curabitur mattis eget purus eleifend tincidunt."
    }
    post = Post.create!(user_id: 1)
    en = I18n::EnPost.new(data)
    ru = I18n::RuPost.new(data)
    en.post = post
    ru.post = post
    en.save!
    ru.save!
  end
end