import {StateService} from '../services';
import {Post, User} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {delay, Observable, switchMap, tap} from 'rxjs';

export function initializeAppFactory(httpClient: HttpClient, stateService: StateService): () => Observable<Post[]> {

  const users$ = httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      tap((user: User[]) => console.log(user)),
      tap((users: User[]) => stateService.users = users),
    );

  const posts$ = httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

  return () => users$
    .pipe(
      switchMap((users: User[]) => posts$
        .pipe(
          tap((posts: Post[]) => {
            users.forEach((user: User) => user.posts = posts.filter((post: Post) => post.userId === user.id));
          })
        )
      ),
      // delay(3000),
    );
}

