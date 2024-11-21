import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availabilityColor',
  standalone: true,
})
export class AvailabilityColorPipe implements PipeTransform {
  transform(inStock: boolean): string {
    return inStock ? '#10B981' : '#EF4442';
  }
}
