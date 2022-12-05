import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private list = new TodoList('Owen', [
    new TodoItem('Cook beans', true),
    new TodoItem('Get Shrek from library'),
    new TodoItem('Dry oranges for garland'),
  ]);

  showCompleted = false;

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter((item) => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter((item) =>
      this.showCompleted || !item.complete
    );
  }

  addItem(task: string) {
    if (!task) return;

    this.list.addItem(task);
  }
}
